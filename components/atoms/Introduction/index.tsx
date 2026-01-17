import { useTranslation } from 'react-i18next';
import { I18N_NAMESPACES } from '../../../helpers/constants';

const Introduction: React.FC = () => {
  const { t } = useTranslation([I18N_NAMESPACES.COMMON]);

  return (
    <section id="about" className="py-16 border-t border-white/10">
      <span className="text-green-500 font-mono text-sm uppercase tracking-widest">{t('common:about')}</span>
      <h2 className="text-3xl font-bold mt-2 mb-6">{t('common:intro_title')}</h2>
      <p className="text-[#AAA6CF] text-lg leading-relaxed max-w-3xl">
        {t('common:intro_text')}
      </p>
    </section>
  );
};

export default Introduction;
