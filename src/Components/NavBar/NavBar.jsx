import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Prueba from "../Prueba/Prueba";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useCart } from "../../context/CartContext"; 
import "./NavBar.css";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const { cart } = useCart(); 

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const productsSnapshot = await getDocs(collection(db, "products"));
        const products = productsSnapshot.docs.map((doc) => doc.data());

        const uniqueCategories = Array.from(
          new Set(products.map((producto) => producto.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error al cargar las categorías:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <nav className="bg-zinc-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/">
                <img
                  className="h-8 w-auto"
                  src="/src/assets/sublimate-mini.png"
                  alt="Logo Sublimat"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-amber-400 hover:text-amber-200"
                  aria-current="page"
                >
                  Home
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/category/${category}`}
                    className="rounded-md px-3 py-2 text-sm font-medium text-amber-400 hover:bg-zinc-700 hover:text-amber-200"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <CartWidget />
            <span className="text-amber-400 font-medium px-3">
              {totalItems}
            </span>
            <div>
              <Prueba />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            to="/"
            className="block rounded-md bg-zinc-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Inicio
          </Link>
          {categories.map((category) => (
            <Link
              key={category}
              to={`/category/${category}`}
              className="block rounded-md px-3 py-2 text-base font-medium text-amber-300 hover:bg-zinc-700 hover:text-white"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
