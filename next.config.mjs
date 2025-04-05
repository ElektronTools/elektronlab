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
    },
    // Configuración para permitir solicitudes de origen cruzado en desarrollo
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
  };
  
  export default nextConfig;
  