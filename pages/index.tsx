import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import { I18N_NAMESPACES } from '../helpers/constants';
import styles from '../styles/Home.module.css';
import WorkExperience from '../components/molecules/WorkExperience';
import ContactForm from '../components/molecules/ContactForm';
import Hero from '../components/atoms/Hero';

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [I18N_NAMESPACES.COMMON])),
    },
  };
}

const Home = () => {
  const { t } = useTranslation([I18N_NAMESPACES.COMMON]);
  return (
    <Container className={styles.center}>
      <Head>
        <title>{t('common:seo.title')}</title>
        {/* Change this for create better SEO */}
        <meta name="description" content="Chris Nohall's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <WorkExperience />
      <ContactForm />
    </Container>
  );
};

export default Home;
