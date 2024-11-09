import React from "react";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./Components/ItemDetail/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetail />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
