// components/Navbar.js
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand d-flex align-items-center text-white">
          <img
            src="/elektronlogo.ico" // Asegúrate de que el archivo está en public/
            alt="Elektron Logo"
            style={{ width: '50px', height: '50px', marginRight: '10px' }}
          />
          Elektron Lab
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto justify-content-center w-100">
            <li className="nav-item">
              <Link href="/laboratory" className="nav-link text-white">Laboratorios</Link>
            </li>
            <li className="nav-item">
              <Link href="/programas" className="nav-link text-white">Descargas</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text-white">¿Qué es Elektron Lab?</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
