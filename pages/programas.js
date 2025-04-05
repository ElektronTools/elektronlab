export default function Programas() {
  return (
    <div className="container mt-4">
      <h1>Descargas</h1>
      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Arduino IDE</h5>
              <p className="card-text">
                Descarga la última versión de Arduino IDE para programar tus proyectos.
              </p>
              <a href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Descargar
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Proteus</h5>
              <p className="card-text">
                Simulador de circuitos electrónicos para diseñar y probar tus proyectos.
              </p>
              <a href="https://www.labcenter.com/downloads/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Descargar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
