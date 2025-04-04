import Navbar from "../components/Navbar";
import Image from 'next/image';
import { useRouter } from 'next/router';

const ProteusPage = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="container py-5 text-center">
        <h2 className="font-weight-bold mb-4">
          <strong>Descarga Proteus 8.17</strong>
        </h2>
        <p className="mb-4">
          Proteus es un software de simulación y diseño de circuitos electrónicos que permite a los usuarios crear y probar circuitos antes de implementarlos físicamente. 
          Es ampliamente utilizado en la educación y en la industria para prototipar y validar diseños electrónicos.
        </p>
        <div className="d-flex flex-column align-items-center">
          <Image
            src="https://3.bp.blogspot.com/-vIudlSKLRjk/WyJC3P55deI/AAAAAAAAAv0/20SWkmyPe24jKTF-wxR85FraIhWgJFRpQCLcBGAs/s1600/p8n.JPG"
            alt="Proteus 8.17"
            width={350}
            height={250}
            className="mb-3"
          />
          <a 
            href="https://drive.google.com/file/d/13kSvOf495EB67NdCO-hx0_SMUkyk-TBB/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-custom mb-1"
          >
            Descargar Proteus v8.17
          </a>
          <a 
            href="https://drive.google.com/file/d/12SJHGht5DvOnfQYuaNJfClADd2I5xWUw/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-custom mb-3"
          >
            Descargar traductor de Proteus al español
          </a>
          <a 
            href="https://drive.google.com/file/d/1tVo7DAXM4jjBqBw08hM0YQHVsK6dtgSC/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-custom mb-3"
          >
            Descargar librería Arduino UNO
          </a>
          <a 
            href="https://drive.google.com/file/d/11UNbW5jiSCCSgYoDkZjb36kXFEHiErCA/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-custom mb-3"
          >
            Descargar WinRAR
          </a>
        </div>
      </div>

      {/* Estilos personalizados */}
      <style jsx>{`
        /* Estilo para los botones personalizados */
        .btn-custom {
          display: inline-block;
          padding: 12px 24px;
          font-size: 16px;
          font-weight: bold;
          text-align: center;
          text-decoration: none;
          border-radius: 5px;
          background-color: #4CAF50; /* Color de fondo verde */
          color: white;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .btn-custom:hover {
          background-color: #45a049; /* Color verde oscuro al pasar el ratón */
          transform: scale(1.05); /* Efecto de agrandamiento */
        }

        .btn-custom:active {
          background-color: #388e3c; /* Color más oscuro al hacer clic */
        }

        .mb-1 {
          margin-bottom: 5px;
        }

        .mb-3 {
          margin-bottom: 15px;
        }
      `}</style>
    </>
  );
};

export default ProteusPage;
