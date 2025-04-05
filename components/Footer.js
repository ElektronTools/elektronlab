import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0 text-white-50 small">
              &copy; {new Date().getFullYear()} Elektron Lab. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 