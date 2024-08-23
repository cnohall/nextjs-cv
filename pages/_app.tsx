import Layout from '../components/molecules/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/fonts/poppins/stylesheet.css';
import '../styles/main.css';
import { useEffect } from 'react';
import BaseStyle from '../styles/baseStyles';
import { appWithTranslation } from 'next-i18next';

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

export default appWithTranslation(MyApp);
