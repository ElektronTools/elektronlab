import Navbar from "../components/Navbar";

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
          <ul className="list-unstyled">
            <li><strong>Trabajo profesional:</strong> Implementamos soluciones de alta calidad en sistemas eléctricos y tecnológicos, garantizando seguridad y eficiencia en cada proyecto.</li>
            <li><strong>Soporte remoto:</strong> Ofrecemos asistencia técnica a distancia, lo que nos permite ayudarte en tiempo real para resolver dudas y problemas, sin importar tu ubicación.</li>
          </ul>
          <p className="mt-4">
            Estamos comprometidos en proporcionar las herramientas necesarias para el desarrollo de proyectos exitosos, tanto para aficionados como para profesionales.
          </p>
        </section>
      </div>
    </>
  );
}
