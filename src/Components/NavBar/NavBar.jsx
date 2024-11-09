import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import Prueba from "../Prueba/Prueba";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-zinc-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-amber-200 hover:bg-zinc-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="/src/assets/sublimate-mini.png"
                alt="Logo Sublimat"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-amber-400 hover:text-amber-200"
                  aria-current="page"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-amber-400 hover:bg-zinc-700 hover:text-amber-200"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-amber-400 hover:bg-zinc-700 hover:text-amber-200"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-amber-400 hover:bg-zinc-700 hover:text-amber-200"
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-zinc-800 p-1 text-amber-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800"
            >
              <span className="absolute -inset-1.5"></span>
            </button>
            <CartWidget />
            <div>
              <Prueba />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="block rounded-md bg-zinc-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Inicio
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-amber-300 hover:bg-zinc-700 hover:text-white"
          >
            Quienes Somos
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-amber-300 hover:bg-zinc-700 hover:text-white"
          >
            Tienda
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-amber-300 hover:bg-zinc-700 hover:text-white"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
