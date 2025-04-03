// pages/index.js
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1>Bienvenido a Elektron Lab</h1>
        <p>Explora laboratorios, descarga programas y descubre más sobre nosotros.</p>
      </div>
    </>
  );
}
