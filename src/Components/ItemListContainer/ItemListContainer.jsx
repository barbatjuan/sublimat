import React, { useEffect, useState } from "react";
import asyncMock from "./../../asyncMock";

const ItemListContainer = ({ categoryId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Filtrar productos por categoría si categoryId está disponible
    const filteredProducts = asyncMock.filter(
      (product) => !categoryId || product.category === categoryId
    );
    setProducts(filteredProducts);
  }, [categoryId]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.img} alt={product.name} />
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
