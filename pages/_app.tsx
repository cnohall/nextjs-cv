import Layout from '../components/molecules/Layout';
import '../styles/tailwind.css';

import { appWithTranslation } from 'next-i18next';
// Import your config explicitly
import nextI18nextConfig from '../next-i18next.config';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
