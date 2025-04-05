import Head from 'next/head';
import Footer from './Footer';

export default function Layout({ children, title = 'Elektron Lab', description = 'Soluciones Eléctricas y Tecnologías' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#343a40" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      
      <div className="d-flex flex-column min-vh-100">
        <main className="flex-grow-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
} 