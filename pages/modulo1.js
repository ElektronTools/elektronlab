// pages/modulo1.js

export default function Modulo1() {
  return (
    <div className="container mt-4">
      <h1>Módulo 1: Introducción a Arduino</h1>
      <div className="row mt-4">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">¿Qué es Arduino?</h5>
              <p className="card-text">
                Arduino es una plataforma de creación de electrónica de código abierto, basada en hardware y software libre, 
                flexible y fácil de usar para creadores y desarrolladores. Esta plataforma permite crear diferentes tipos de 
                microordenadores de una sola placa a los que la comunidad de creadores puede darles diferentes tipos de uso.
              </p>
            </div>
          </div>
          
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Componentes básicos</h5>
              <p className="card-text">
                En este módulo aprenderás sobre los componentes básicos de un proyecto Arduino:
              </p>
              <ul>
                <li>Placa Arduino</li>
                <li>LEDs</li>
                <li>Resistencias</li>
                <li>Botones</li>
                <li>Cables de conexión</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Recursos adicionales</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="https://www.arduino.cc/en/Guide/Introduction" target="_blank" rel="noopener noreferrer">
                    Guía oficial de Arduino
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://www.arduino.cc/en/Tutorial/HomePage" target="_blank" rel="noopener noreferrer">
                    Tutoriales oficiales
                  </a>
                </li>
                <li>
                  <a href="https://www.arduino.cc/en/Reference/HomePage" target="_blank" rel="noopener noreferrer">
                    Referencia de lenguaje
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
