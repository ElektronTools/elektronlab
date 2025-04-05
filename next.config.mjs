/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '3.bp.blogspot.com',
          pathname: '/**',
        },
      ],
      unoptimized: false, // Habilitar optimización de imágenes
    },
    // Configuración para permitir solicitudes de origen cruzado
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*',
            },
          ],
        },
      ];
    },
    // Optimizaciones para producción
    swcMinify: true, // Usar SWC para minificación
    reactStrictMode: true, // Habilitar modo estricto de React
    poweredByHeader: false, // Ocultar el encabezado X-Powered-By
  };
  
  export default nextConfig;
  