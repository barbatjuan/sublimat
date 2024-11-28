import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ItemListContainer.css";
import Loader from "../Loader/Loader";  // Importamos el Loader mejorado
import { db } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);  // Estado para controlar el loader
  const { id } = useParams();

  useEffect(() => {
    // Simulamos un retraso de 1500ms
    const fetchProducts = async () => {
      setTimeout(async () => {
        const collectionRef = id
          ? query(collection(db, "products"), where("category", "==", id))
          : collection(db, "products");

        try {
          const querySnapshot = await getDocs(collectionRef);
          const products = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProducts(products);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false); // Cambiar el estado de loading a false después de la simulación
        }
      }, 1500);  // Retraso de 1500ms
    };

    fetchProducts();
  }, [id]);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {loading ? (
        <Loader />  // Mostrar el loader mientras se cargan los productos
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className="card bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.img}
              alt={product.name}
              className="card-img w-full h-64 object-cover"
            />
            <div className="card-body p-4">
              <h3 className="text-gray-900 font-semibold text-xl">
                {product.name}
              </h3>
              <p className="text-gray-700 mt-2">{product.description}</p>
              <div className="card-footer flex justify-between items-center mt-4">
                <span className="text-gray-900 font-semibold">
                  ${product.price}
                </span>
                <div className="flex gap-2">

                  <Link
                    to={`/item/${product.id}`}
                    className="btn-add text-white py-2 px-4 rounded "
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemListContainer;
