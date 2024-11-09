import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductos } from "./../../asyncMock";
import "./ItemDetail.css"; // Archivo de estilo independiente

const ItemDetail = () => {
  const { id } = useParams(); // Obtener el ID del producto desde la URL
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProductos();
      const foundProduct = data.find((item) => item.id === parseInt(id));
      setProducto(foundProduct);
    };
    fetchData();
  }, [id]);

  if (!producto) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <img
          src={producto.img}
          alt={producto.name}
          className="item-detail-img"
        />
        <div className="item-detail-info">
          <h2 className="item-detail-title">{producto.name}</h2>
          <p className="item-detail-description">{producto.description}</p>
          <p className="item-detail-price">${producto.price}</p>
          <button className="btn-add-detail text-white py-2 px-4 rounded ">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
