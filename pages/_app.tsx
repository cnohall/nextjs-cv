import Layout from '../components/molecules/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/fonts/poppins/stylesheet.css';
import '../styles/main.css';
import { useEffect } from 'react';
import '../helpers/i18n';
import BaseStyle from '../styles/baseStyles';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.tsx').then(
          function (registration) {
            console.log('Service Worker registration successful with scope: ', registration.scope);
          },
          function (err) {
            console.log('Service Worker registration failed: ', err);
          },
        );
      });
    }
  }, []);

  return (
    <Layout>
      <BaseStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
