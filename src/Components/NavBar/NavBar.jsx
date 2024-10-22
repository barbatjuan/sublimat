import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-custom">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src="/src/assets/sublimate-mini.png"
                alt="Logo"
                width="150"
                height="auto"
                class="d-inline-block align-text-top"
              />
            </a>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link-custom active"
                aria-current="page"
                href="#"
              >
                Inicio
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link-custom dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Camisetas
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Tazas
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link-custom" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <span class="navbar-text">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
