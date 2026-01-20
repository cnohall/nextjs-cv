import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { I18N_NAMESPACES } from '../helpers/constants';
import { projectData } from '../data/projects';

export default function Projects() {
  const { t } = useTranslation();

  const projects = projectData.map((project) => ({
    ...project,
    title: t(project.titleKey),
    description: t(project.descriptionKey),
  }));

  return (
    <div className="py-12">
      <Head>
        <title>
          {t('common:projects_title')}
          {t('common:page_title_separator')}
        </title>
        <meta name="description" content={t('common:projects_description')} />
      </Head>
      <header className="mb-16">
        <h1 className="text-5xl font-black mb-4">{t('common:projects_title')}</h1>
        <p className="text-text-secondary text-xl max-w-2xl">{t('common:projects_description')}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group bg-white/10 backdrop-blur-lg p-8 rounded-2xl flex flex-col ${
              index % 2 === 0
                ? 'border border-white/20 hover:border-accent-primary/50'
                : 'border-l-4 border-accent-primary hover:border-accent-primary/50'
            } transition-all`}
            data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
            data-aos-delay={(index % 2) * 100}
            data-aos-anchor-placement="top-center"
          >
            <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-text-secondary mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-border-light/20 rounded-full border border-border-light text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-accent-primary text-background-primary hover:brightness-110 px-6 py-3 rounded-xl font-bold transition-all"
            >
              {t('common:visit_website')}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [I18N_NAMESPACES.COMMON])),
    },
  };
}
