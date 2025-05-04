// pages/index.js

import ImageCarousel from '../components/ImageCarousel';
import NeonSign from '../components/NeonSign';

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
  return (
    <div>
      <ImageCarousel slides={slides} />
      <NeonSign />
      <div className="container mt-4">
        <h1>Bienvenido a Elektron Lab</h1>
        <p>Explora laboratorios, descarga programas y descubre más sobre nosotros.</p>
      </div>
    </div>
  );
}
