import React, { useState } from "react";
import { useCart } from "../../context/CartContext"; 
import { useNavigate } from "react-router-dom";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import Loader from "../Loader/Loader"; 
import "./Checkout.css";

const Checkout = () => {
  const { cart, clearCart } = useCart(); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); 

  const getTotalPrice = () => {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.address || !formData.phone) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    const order = {
      buyer: formData,
      items: cart,
      total: getTotalPrice(),
      date: new Date().toISOString(),
    };

    setIsLoading(true); 

    try {
      // Crear la orden en la colección "orders"
      const docRef = await addDoc(collection(db, "orders"), order);
      console.log("Orden registrada con ID:", docRef.id);

      // Actualizar el stock de los productos comprados
      for (const product of cart) {
        const productRef = doc(db, "products", product.id); // Referencia al producto
        const newStock = product.stock - product.quantity; // Disminuir el stock

        await updateDoc(productRef, {
          stock: newStock, // Actualizamos el stock del producto
        });
        console.log(`Stock del producto ${product.name} actualizado a ${newStock}`);
      }

      // Limpiar el carrito después de realizar la compra
      clearCart();
      
      // Redirigir al usuario a la página de éxito con el ID de la orden
      navigate(`/success/${docRef.id}`); 

    } catch (err) {
      console.error("Error al registrar la orden:", err);
      setError("Ocurrió un error al procesar tu compra. Inténtalo nuevamente.");
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Finalizar compra</h2>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre completo:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Escribe tu nombre"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Escribe tu correo"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Dirección:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Escribe tu dirección"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Escribe tu teléfono"
            className="form-input"
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="checkout-summary">
          <p className="total-price">
            Total a pagar: <span>${getTotalPrice()}</span>
          </p>
        </div>

        {isLoading ? (
          <Loader /> 
        ) : (
          <button type="submit" className="btn-submit">Confirmar compra</button>
        )}
      </form>
    </div>
  );
};

export default Checkout;
