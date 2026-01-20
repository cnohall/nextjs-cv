import Layout from '../components/molecules/Layout';
import '../styles/tailwind.css';
import 'aos/dist/aos.css'; // Import AOS CSS

import { appWithTranslation } from 'next-i18next';
import nextI18nextConfig from '../next-i18next.config';
import { useEffect } from 'react'; // Import useEffect
import AOS from 'aos'; // Import AOS

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      // Optional settings that can be overridden by `data-aos` attributes
      duration: 800, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
