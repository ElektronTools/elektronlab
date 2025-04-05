import Link from 'next/link';

export default function Laboratory() {
    return (
        <div className="container mt-4">
            <h1>Laboratorios</h1>
            <div className="row mt-4">
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Laboratorio de Arduino</h5>
                            <p className="card-text">
                                Aprende a programar microcontroladores Arduino con nuestros tutoriales y proyectos prácticos.
                            </p>
                            <Link href="/modulo1" className="btn btn-primary">Comenzar</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Laboratorio de Electrónica</h5>
                            <p className="card-text">
                                Explora circuitos electrónicos básicos y avanzados con nuestros simuladores y guías.
                            </p>
                            <Link href="/proteus" className="btn btn-primary">Explorar</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Laboratorio de Programación</h5>
                            <p className="card-text">
                                Mejora tus habilidades de programación con nuestros ejercicios y proyectos.
                            </p>
                            <Link href="/programas" className="btn btn-primary">Descubrir</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
