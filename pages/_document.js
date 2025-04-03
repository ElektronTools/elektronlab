// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Carga Bootstrap y el tema Bootswatch */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@5.2.0/dist/lux/bootstrap.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
