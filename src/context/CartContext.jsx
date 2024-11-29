import React, { createContext, useState, useContext } from 'react';
import Swal from 'sweetalert2';
import './SweetAlert.css'; 

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);

      if (existingProduct) {
        const newQuantity = existingProduct.quantity + quantity;

        if (newQuantity > product.stock) {
          Swal.fire({
            icon: 'error',
            title: 'Stock insuficiente',
            text: `No puedes agregar más de ${product.stock} unidades de este producto.`,
            confirmButtonText: 'Entendido',
            customClass: {
              popup: 'custom-popup',
              title: 'custom-title',
              confirmButton: 'custom-button',
            },
          });
          return prevCart;
        }

        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: newQuantity }
            : item
        );
      } else {
        if (quantity > product.stock) {
          Swal.fire({
            icon: 'error',
            title: 'Stock insuficiente',
            text: `No puedes agregar más de ${product.stock} unidades de este producto.`,
            confirmButtonText: 'Entendido',
            customClass: {
              popup: 'custom-popup',
              title: 'custom-title',
              confirmButton: 'custom-button',
            },
          });
          return prevCart;
        }

        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
