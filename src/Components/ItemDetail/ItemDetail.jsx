import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";  
import { doc, getDoc } from "firebase/firestore";
import Loader from "../Loader/Loader";
import "./ItemDetail.css"; 

const ItemDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "products", id); 
        const docSnap = await getDoc(docRef); 

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such product!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchData();
  }, [id]); 

  if (loading) {
    return <Loader />; 
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <img
          src={product.img}
          alt={product.name}
          className="item-detail-img"
        />
        <div className="item-detail-info">
          <h2 className="item-detail-title">{product.name}</h2>
          <p className="item-detail-description">{product.description}</p>
          <p className="item-detail-price">${product.price}</p>
          <button className="btn-add-detail text-white py-2 px-4 rounded ">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
