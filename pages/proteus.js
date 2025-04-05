export default function Proteus() {
  return (
    <div className="container mt-4">
      <h1>Proteus - Simulador de Circuitos</h1>
      <div className="row mt-4">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">¿Qué es Proteus?</h5>
              <p className="card-text">
                Proteus es un software de simulación de circuitos electrónicos que permite diseñar, 
                probar y depurar circuitos antes de implementarlos en hardware real. Es una herramienta 
                esencial para estudiantes, aficionados y profesionales de la electrónica.
              </p>
            </div>
          </div>
          
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Características principales</h5>
              <ul>
                <li>Simulación de circuitos en tiempo real</li>
                <li>Biblioteca extensa de componentes</li>
                <li>Compatibilidad con microcontroladores</li>
                <li>Herramientas de análisis avanzadas</li>
                <li>Exportación de diseños a PCB</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Recursos</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="https://www.labcenter.com/downloads/" target="_blank" rel="noopener noreferrer">
                    Descargar Proteus
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://www.labcenter.com/support/" target="_blank" rel="noopener noreferrer">
                    Soporte oficial
                  </a>
                </li>
                <li>
                  <a href="https://www.labcenter.com/tutorials/" target="_blank" rel="noopener noreferrer">
                    Tutoriales
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
