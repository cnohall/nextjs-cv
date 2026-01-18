import Layout from '../components/molecules/Layout';
import '../styles/tailwind.css';
import { useEffect } from 'react';

import { appWithTranslation } from 'next-i18next';
// Import your config explicitly
import nextI18nextConfig from '../next-i18next.config';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.tsx').then(
          (registration) => console.log('SW registered: ', registration.scope),
          (err) => console.log('SW registration failed: ', err),
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

// Pass the config as the second argument to fix the "missing config" error
export default appWithTranslation(MyApp, nextI18nextConfig);
