import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

import Layout from '../components/Layout';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }) {
  return (
    <div className="container mt-5 text-center">
      <h2>Algo salió mal:</h2>
      <pre className="text-danger">{error.message}</pre>
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}

export default MyApp; 