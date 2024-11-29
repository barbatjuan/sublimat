import React, { useState } from "react";
import { useCart } from "../../context/CartContext"; 
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
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

  // Calcula el precio total
  const getTotalPrice = () => {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  };

  // Maneja el cambio de los campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envía los datos a Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que todos los campos estén completos
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

    try {
      // Agregar la orden a Firestore
      const docRef = await addDoc(collection(db, "orders"), order);
      console.log("Orden registrada con ID:", docRef.id);

      // Vaciar el carrito y redirigir
      clearCart();
      navigate(`/success/${docRef.id}`); // Redirige a una página de éxito con el ID
    } catch (err) {
      console.error("Error al registrar la orden:", err);
      setError("Ocurrió un error al procesar tu compra. Inténtalo nuevamente.");
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
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="checkout-summary">
          <p className="total-price">
            Total a pagar: <span>${getTotalPrice()}</span>
          </p>
        </div>

        <button type="submit" className="btn-submit">Confirmar compra</button>
      </form>
    </div>
  );
};

export default Checkout;
