import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import WorkExperience from '../components/molecules/WorkExperience';
import ContactForm from '../components/molecules/ContactForm';
import Hero from '../components/atoms/Hero';
import Introduction from '../components/atoms/Introduction';

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [I18N_NAMESPACES.COMMON])),
    },
  };
}

const Home = () => {
  return (
    <div className="bg-[#171321] text-white min-h-screen flex flex-col">
      <Hero />
      <Introduction />
      <WorkExperience />
      <ContactForm />
    </div>
  );
};

export default Home;
