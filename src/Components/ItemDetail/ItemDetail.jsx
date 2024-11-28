import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";  
import { doc, getDoc } from "firebase/firestore";
import { useCart } from "../../context/CartContext"; // Importamos el contexto
import Loader from "../Loader/Loader";
import "./ItemDetail.css"; 

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [quantity, setQuantity] = useState(1); 
  const { addToCart } = useCart(); // Obtenemos la función para agregar al carrito

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "products", id); 
        const docSnap = await getDoc(docRef); 

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No se encuentra el producto!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchData();
  }, [id]);

  const handleIncrement = () => {
    if (quantity < product?.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (product && product.stock >= quantity) {
      addToCart(product, quantity); // Llamamos a la función para agregar al carrito
    } else {
      console.log("No hay suficiente stock para este producto.");
    }
  };

  if (loading) {
    return <Loader />; 
  }

  if (!product) {
    return <p>Producto no encontrado.</p>;
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
          
          <p className="item-detail-stock">Stock disponible: {product.stock}</p>
          
          <div className="item-detail-quantity">
            <button
              className="btn-quantity"
              onClick={handleDecrement}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="quantity">{quantity}</span> 
            <button
              className="btn-quantity"
              onClick={handleIncrement}
              disabled={quantity >= product.stock} 
            >
              +
            </button>
          </div>

          <button 
            className="btn-add-detail text-white py-2 px-4 rounded"
            onClick={handleAddToCart} // Agregamos el evento al botón
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
