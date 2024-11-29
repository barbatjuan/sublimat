import React from "react";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./Components/ItemDetail/ItemDetail";
import CartDetail from "./Components/CartDetail/CartDetail"; 
import Checkout from "./Components/Checkout/Checkout";
import { CartProvider } from "./context/CartContext"; 
import Success from "./Components/Success/Success"; 

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/cartdetail" element={<CartDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success/:orderId" element={<Success />} />
          </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
