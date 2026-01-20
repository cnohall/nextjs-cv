import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import WorkExperience from '../components/molecules/WorkExperience';
import ContactForm from '../components/molecules/ContactForm';
import Hero from '../components/atoms/Hero';
import Introduction from '../components/atoms/Introduction';
import { I18N_NAMESPACES } from '../helpers/constants';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [I18N_NAMESPACES.COMMON])),
    },
  };
}

const Home = () => {
  return (
    <>
      <Head>
        <title>Chris Nohall - Frontend Developer</title>
        <meta
          name="description"
          content="The portfolio of Chris Nohall, a frontend developer with a passion for creating beautiful and functional web applications."
        />
      </Head>
      <Hero />
      <Introduction />
      <WorkExperience />
      <ContactForm />
    </>
  );
};

export default Home;
