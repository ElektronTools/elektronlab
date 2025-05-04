// components/Navbar.js

import Image from 'next/image';
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof bootstrap === "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand d-flex align-items-center text-white">
          <Image
            src="/elektronlogo.ico"
            alt="Elektron Logo"
            width={30}
            height={30}
            className="d-inline-block align-text-top me-2"
          />
          Industrial Tech <br></br>
          Solutions
        </Link>

        <button
          className="navbar-toggler border-light"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav mx-auto text-center">
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="arduinoDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Arduino
              </a>
              <ul className="dropdown-menu bg-dark text-center" aria-labelledby="arduinoDropdown">
                <li>
                  <Link href="/modulo1" className="dropdown-item text-white">
                    Introducción
                  </Link>
                </li>
                <li>
                  <Link href="/modulo2" className="dropdown-item text-white">
                    Comunicación serial
                  </Link>
                </li>
                <li>
                  <Link href="/modulo3" className="dropdown-item text-white">
                    Sensores
                  </Link>
                </li>
                <li>
                  <Link href="/modulo3" className="dropdown-item text-white">
                    Motores
                  </Link>
                </li>
                <li>
                  <Link href="/modulo3" className="dropdown-item text-white">
                    ...
                  </Link>
                </li>


              </ul>
            </li> */}

{/*             <li className="nav-item">
              <Link href="/laboratory" className="nav-link text-white">
                Laboratorios
              </Link>
            </li> */}
{/*             <li className="nav-item">
              <Link href="/programas" className="nav-link text-white">
                Descargas
              </Link>
            </li> */}
            <li className="nav-item">
              <Link href="/about" className="nav-link text-white">
                ¿Quienes somos?
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
