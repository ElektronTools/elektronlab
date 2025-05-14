// pages/index.js

import ImageCarousel from '../components/ImageCarousel';
import NeonSign from '../components/NeonSign';
import { useRouter } from 'next/router';

const slides = [
  {
    image: '/image1.jpg',
    text: '✔️ Instalaciones Eléctricas Domiciliarias, Comerciales e Industriales'
  },
  {
    image: '/image2.jpg',
    text: '✔️ Reparación y mantenimiento de Sistemas de Seguridad'
  } ,
  {
    image: '/image3.jpg',
    text: '✔️ Motores y Tableros Eléctricos'
  }/* ,
  {
    image: '/elektronlabremote.png',
    text: '✔️ Diseño de planos eléctricos'
  }  */
];

export default function Home() {
  const router = useRouter();
  const showFooter = ['/quienes-somos', '/contacto', '/servicios'].includes(router.pathname);

  return (
    <div>
      <div className="container mt-10 space-y-6 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Soluciones eléctricas y tecnologías</h2>
        <br></br>
        <br></br>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mx-auto max-w-3xl">
          <p className="text-lg text-gray-800 leading-relaxed">
            ✔️ Instalaciones Eléctricas: Domiciliarias, Comerciales e Industriales. <br />
            - Tableros Eléctricos <br />
            - Entubado de loza y cableado<br />
            - Iluminación, Leds <br />
            - Tomas de corriente y Conmutadores <br />
            - Duchas eléctricas <br />

            ✔️ Instalación, reparación y mantenimiento de sistemas de seguridad. <br />
            - Cámaras de videovigilancia con acceso remoto <br />
            - Intercomunicadores y video porteros <br />
            - chapas eléctricas <br />
            - sensores de movimiento <br />
            ✔️ Diseño de planos eléctricos NB777. <br /><br />
            🎯 Atención rápida y garantizada <br />
            🚨 Emergencias 24/7 <br />
            💡 Soluciones efectivas a precios accesibles <br />
            📍 La Paz, El Alto - Bolivia <br />
            📞 ¡Contáctanos y solucionaremos tus problemas eléctricos al instante!
          </p>
        </div>
      </div>

      <ImageCarousel slides={slides} />
      <NeonSign />
    </div>
  );
}
