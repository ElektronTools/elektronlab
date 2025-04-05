import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Proyectos() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <section className="about-section text-center">
          <h1 className="display-4 mb-4">¡Hello world!</h1>
          <p className="lead mb-4">
            En <strong>Elektron Lab</strong>, nos especializamos en ofrecer soluciones profesionales en electricidad, electrónica y programación. Nuestro enfoque está en <strong>energía eléctrica AC/DC</strong> y en el uso de <strong>simuladores de software libre</strong> para facilitar el aprendizaje y desarrollo de proyectos innovadores.
          </p>
          
          <div className="mt-5 mb-5">
            <Image 
              src="/elektronlabremote.png" 
              alt="Elektron Lab Remote" 
              width={800} 
              height={450} 
              className="img-fluid rounded shadow"
            />
          </div>
        </section>
      </div>
    </>
  );
}
