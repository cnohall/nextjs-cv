import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
       navigator.serviceWorker.register('/sw.tsx').then(
          function (registration) {
            console.log('Service Worker registration successful with scope: ', registration.scope);
          },
          function (err) {
            console.log('Service Worker registration failed: ', err);
          }
        );
      });
    }
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
