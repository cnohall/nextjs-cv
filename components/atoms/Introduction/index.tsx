import { useTranslation } from 'next-i18next';
import { I18N_NAMESPACES } from '../../../helpers/constants';

const Introduction: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 border-t border-border-light">
      <span className="text-accent-primary font-mono text-sm uppercase tracking-widest">
        {t('about')}
      </span>
      <h2 className="text-3xl font-bold mt-2 mb-6">{t('intro_title')}</h2>
      <p className="text-text-primary text-lg leading-relaxed max-w-3xl">{t('intro_text')}</p>
    </section>
  );
};

export default Introduction;
