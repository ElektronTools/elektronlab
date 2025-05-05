// pages/index.js

import ImageCarousel from '../components/ImageCarousel';
import NeonSign from '../components/NeonSign';
import { useRouter } from 'next/router';

const slides = [
  {
    image: '/elektronlabremote.png',
    text: 'Bienvenido a Elektron Lab - Tu laboratorio virtual de electrónica'
  },
  {
    image: '/elektronlabremote.png',
    text: 'Aprende Arduino, electrónica y programación con nosotros'
  },
  {
    image: '/elektronlabremote.png',
    text: 'Explora nuestros laboratorios y recursos educativos'
  }
];

export default function Home() {
  const router = useRouter();
  const showFooter = ['/quienes-somos', '/contacto', '/servicios'].includes(router.pathname);

  return (
    <div>
      <div className="container mt-4">
        <h1>Bienvenido a Elektron Lab</h1>
        <p>Explora laboratorios, descarga programas y descubre más sobre nosotros.</p>
      </div>

      <ImageCarousel slides={slides} />
      <NeonSign />

      <div className="container mt-5">
        <h1>Servicios</h1>
        <ul>
          <li>Instalaciones eléctricas domiciliarias e industriales.</li>
          <li>Instalación, mantenimiento y reparación de sistemas de seguridad.</li>
          <li>Diseño de planos eléctricos.</li>
          <li>Tableros eléctricos.</li>
          <li>Puesta a tierra y protección contra descargas.</li>
        </ul>
      </div>
    </div>
  );
}
