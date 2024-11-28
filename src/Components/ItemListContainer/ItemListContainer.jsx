import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ItemListContainer.css";
import { db } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const collectionRef = id
    ? query(collection(db, "products"), where("category", "==", id))
    : collection(db, "products")

    getDocs(collectionRef)
      .then((querySnapshot)=>{
        const products = querySnapshot.docs.map((doc)=>{
          return {id: doc.id, ...doc.data()}
        })
        setProducts(products)
      })
      .catch((error)=>{
        console.log(error)
      })
  }, [id]);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
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
                <button className="btn-add text-white py-2 px-4 rounded">
                  Agregar
                </button>

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
      ))}
    </div>
  );
};

export default ItemListContainer;
