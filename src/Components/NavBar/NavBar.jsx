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
  
  // Estado para controlar la apertura del menú hamburguesa
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
          
          {/* Logo centrado */}
          <div className="flex items-center justify-center flex-1">
            <Link to="/">
              <img
                className="h-8 w-auto"
                src="https://www.sublimat.uy/wp-content/uploads/2024/10/sublimate-mini.png"
                alt="Logo Sublimat"
              />
            </Link>
          </div>

          {/* Menú centrado (flex-1 ya asegura que el menú se centra) */}
          <div className="flex-1 flex justify-start">
            <div className="hidden sm:block">
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

          {/* Icono del carrito y otras opciones a la derecha */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <CartWidget />
            <span className="text-amber-400 font-medium px-3">
              {totalItems}
            </span>
            <div>
              <Prueba />
            </div>
          </div>

          {/* Icono del menú hamburguesa alineado a la izquierda */}
          <div className="sm:hidden absolute left-4 top-3">
            <button
              onClick={toggleMenu}
              className="text-amber-400 focus:outline-none"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil centrado */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:hidden transition-all duration-300 ease-in-out transform bg-zinc-800 space-y-1 px-2 pb-3 pt-2`}
        id="mobile-menu"
      >
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
    </nav>
  );
};

export default NavBar;
