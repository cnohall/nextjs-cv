import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { I18N_NAMESPACES } from '../helpers/constants';
import Layout from '../components/molecules/Layout';

export default function Projects() {
  const { t } = useTranslation([I18N_NAMESPACES.COMMON]);

  const projects = [
    {
      title: 'PolarisAudit (Founder)',
      description: t('common:polarisaudit_desc'),
      link: 'https://polarisaudit.com/',
      tags: ['Next.js', 'TypeScript', 'Security']
    },
    {
      title: 'EmptyInbox (Founder)',
      description: t('common:emptyinbox_desc'),
      link: 'https://emptyinbox.me/',
      tags: ['React', 'Node.js', 'Passkeys']
    },
    {
      title: 'Ark Explorer (Lead Developer)',
      description: t('common:rkexplorer_desc'),
      link: 'https://rkexplorer.blockonomics.co/',
      tags: ['React', 'Bitcoin', 'Web3']
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Head>
          <title>{t('common:projects_title')} | Chris Nohall</title>
        </Head>
        <header className="mb-16">
          <h1 className="text-5xl font-black mb-4">{t('common:projects_title')}</h1>
          <p className="text-[#AAA6CF] text-xl max-w-2xl">{t('common:projects_description')}</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-green-500/50 transition-all flex flex-col">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-green-500 transition-colors">{project.title}</h3>
              <p className="text-[#AAA6CF] mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags?.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[#AAA6CF]">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-center bg-white text-black hover:bg-green-500 hover:text-white px-6 py-3 rounded-xl font-bold transition-all"
              >
                {t('common:visit_website')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [I18N_NAMESPACES.COMMON])),
    },
  };
}
