import React from "react";
import { useCart } from "../../context/CartContext"; 
import { Link } from "react-router-dom"; 
import "./Checkout.css"; 

const Checkout = () => {
  const { cart } = useCart(); 

  const getTotalPrice = () => {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Detalles de tu compra</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Tu carrito está vacío.</p>
      ) : (
        <div className="checkout-items">
          {cart.map((product) => (
            <div key={product.id} className="checkout-item">
              <img
                src={product.img}
                alt={product.name}
                className="checkout-item-img"
              />
              <div className="checkout-item-info">
                <h3>{product.name}</h3>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: ${product.price}</p>
                <p>Total: ${product.price * product.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="checkout-summary">
          <p className="total-price">
            Total: <span>${getTotalPrice()}</span>
          </p>
          <button className="btn-checkout">Proceder al pago</button>
        </div>
      )}

      <Link to="/" className="btn-back">Volver a la tienda</Link>
    </div>
  );
};

export default Checkout;
