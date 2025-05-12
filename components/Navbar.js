// components/Navbar.js

import Image from 'next/image';
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTools,
  faShoppingCart,
  faUsers,
  faBolt,
  faWrench,
  faLightbulb,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && typeof bootstrap === "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <div className="logo-container">
            <Image
              src="/elektronlogo.ico"
              alt="Elektron Logo"
              width={45}
              height={45}
              className="logo-image"
            />
          </div>
          <div className="brand-text">
            <span className="brand-title">TECH ELECTRIC</span>
            <span className="brand-subtitle">Soluciones ElectricaS AC⚡DC</span>
          </div>
        </Link>

       {/*  <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

{/*         <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                onClick={() => toggleDropdown('servicios')}
              >
                <FontAwesomeIcon icon={faTools} className="nav-icon" />
                <span>Servicios</span>
              </a>
              <ul className={`dropdown-menu ${activeDropdown === 'servicios' ? 'show' : ''}`}>
                <li>
                  <Link href="/servicios/instalaciones" className="dropdown-item">
                    <FontAwesomeIcon icon={faBolt} className="dropdown-icon" />
                    <span>Instalaciones</span>
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/mantenimiento" className="dropdown-item">
                    <FontAwesomeIcon icon={faWrench} className="dropdown-icon" />
                    <span>Mantenimiento</span>
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/consultoria" className="dropdown-item">
                    <FontAwesomeIcon icon={faLightbulb} className="dropdown-icon" />
                    <span>Consultoría</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                onClick={() => toggleDropdown('productos')}
              >
                <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
                <span>Productos</span>
              </a>
              <ul className={`dropdown-menu ${activeDropdown === 'productos' ? 'show' : ''}`}>
                <li>
                  <Link href="/productos/componentes" className="dropdown-item">
                    <FontAwesomeIcon icon={faTools} className="dropdown-icon" />
                    <span>Componentes</span>
                  </Link>
                </li>
                <li>
                  <Link href="/productos/herramientas" className="dropdown-item">
                    <FontAwesomeIcon icon={faWrench} className="dropdown-icon" />
                    <span>Herramientas</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link href="/about" className="nav-link">
                <FontAwesomeIcon icon={faUsers} className="nav-icon" />
                <span>¿Quiénes somos?</span>
              </Link>
            </li>
          </ul>
        </div> */}
      </div>

      <style jsx>{`
        .navbar {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          transition: all 0.3s ease;
        }

        .logo-container {
          position: relative;
          margin-right: 1rem;
        }

        .logo-image {
          border-radius: 12px;
          transition: transform 0.3s ease;
        }

        .logo-image:hover {
          transform: scale(1.05);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #2d3748;
        }

        .brand-subtitle {
          font-size: 0.8rem;
          color: #4a5568;
        }

        .nav-link {
          color: #2d3748;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-link:hover {
          background: rgba(0, 0, 0, 0.05);
          color: #1a202c;
        }

        .nav-icon {
          font-size: 1.1rem;
          color: #4a5568;
        }

        .dropdown-menu {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          padding: 0.5rem;
          margin-top: 0.5rem;
        }

        .dropdown-item {
          color: #2d3748;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
        }

        .dropdown-item:hover {
          background: rgba(0, 0, 0, 0.05);
          transform: translateX(5px);
        }

        .dropdown-icon {
          color: #4a5568;
          width: 1rem;
        }

        @media (max-width: 991.98px) {
          .navbar-collapse {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 1rem;
            margin-top: 1rem;
          }

          .nav-link {
            justify-content: center;
          }

          .dropdown-menu {
            background: transparent;
            box-shadow: none;
            padding: 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
