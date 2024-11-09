import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductos } from "./../../asyncMock";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams(); // Captura el parámetro 'id' de la ruta

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProductos();
      if (id) {
        // Filtra los productos por categoría
        const filteredProducts = data.filter(
          (producto) => producto.category === id
        );
        setProductos(filteredProducts);
      } else {
        // Si no hay categoría, muestra todos los productos
        setProductos(data);
      }
    };
    fetchData();
  }, [id]); // Se ejecuta nuevamente si 'id' cambia (cuando se selecciona una categoría)

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {productos.map((producto) => (
        <div
          key={producto.id}
          className="card bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={producto.img}
            alt={producto.name}
            className="card-img w-full h-64 object-cover"
          />
          <div className="card-body p-4">
            <h3 className="text-gray-900 font-semibold text-xl">
              {producto.name}
            </h3>
            <p className="text-gray-700 mt-2">{producto.description}</p>
            <div className="card-footer flex justify-between items-center mt-4">
              <span className="text-gray-900 font-semibold">
                ${producto.price}
              </span>
              <button className="btn-add  text-white py-2 px-4 rounded ">
                Agregar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
