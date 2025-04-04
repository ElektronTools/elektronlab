import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

const Programas = () => {
  const router = useRouter();

  // Arreglo de programas (posts)
  const programas = [
    {
      title: "Proteus 8.17",
      imagenURL: "https://3.bp.blogspot.com/-vIudlSKLRjk/WyJC3P55deI/AAAAAAAAAv0/20SWkmyPe24jKTF-wxR85FraIhWgJFRpQCLcBGAs/s1600/p8n.JPG",
      route: "/proteus", // Ruta para redirigir cuando se hace clic en el título
    },
/*     {
      title: "Arduino IDE",
      imagenURL: "https://www.arduino.cc/sites/default/files/styles/card_large/public/2021-03/IDE-1.8.16.jpg?itok=J0cd6z0a",
      route: "/arduino-ide", // Otra ruta como ejemplo
    }, */
  ];

  const handleDownload = (route) => {
    router.push(route);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row justify-content-center">
          {programas.map((programa, i) => (
            <div key={i} className="col-md-6 col-lg-4 mb-4">
              <div className="card text-center shadow-lg border-0 rounded-3">
                <div className="overflow-hidden rounded-top">
                  <img
                    src={programa.imagenURL}
                    className="card-img-top object-fit-cover"
                    style={{ height: "200px" }}
                    alt={programa.title}
                  />
                </div>
                <div className="card-body">
                  <h5
                    className="card-title fw-bold"
                    onClick={() => handleDownload(programa.route)}
                    style={{
                      cursor: "pointer",
                      color: "#ff5733",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#ff3300")}
                    onMouseOut={(e) => (e.target.style.color = "#ff5733")}
                  >
                    {programa.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Programas;
