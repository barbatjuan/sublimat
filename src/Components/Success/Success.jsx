import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/index";
import { doc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import "./Success.css";

const Success = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const docRef = doc(db, "orders", orderId); // Buscar la orden por el ID
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setOrder(docSnap.data());
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se encontró la orden.",
        });
      }
    };

    fetchOrder();
  }, [orderId]);

  if (!order) {
    return <div>Cargando...</div>;
  }

  // Verificar si `order.cart` existe antes de usar map
  const cartItems = order.items || [];  // Si `cart` no existe, usamos un arreglo vacío

  return (
    <div className="success-container">
  <h2>¡Compra realizada con éxito!</h2>
  <p>Gracias por tu compra, {order.buyer.name}.</p>
  <p>Tu pedido ha sido registrado con el siguiente ID: {orderId}</p>
  <p>Detalles del pedido:</p>
  <ul>
    {cartItems.length > 0 ? (
      cartItems.map((item) => (
        <li key={item.id}>
          <strong>{item.name}</strong>
          <div className="product-details">
            Precio unitario: ${item.price}
            <span>Cantidad: {item.quantity}</span>
            <span>Total: ${item.price * item.quantity}</span>
          </div>
        </li>
      ))
    ) : (
      <li>No hay productos en tu pedido.</li>
    )}
  </ul>
</div>
  );
};

export default Success;
