import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';
import { I18N_NAMESPACES } from '../../../helpers/constants';

export default function Footer() {
  const { t } = useTranslation([I18N_NAMESPACES.COMMON]);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-[#AAA6CF] text-sm">{t('common:copyright', { year })}</p>
          <p className="text-[#AAA6CF]/50 text-xs mt-1">{t('common:built_with')}</p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <a
              href="https://github.com/cnohall/cnohall"
              target="_blank"
              className="text-[#AAA6CF] hover:text-white transition-colors"
            >
              <BsGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/christopher-nohall/"
              target="_blank"
              className="text-[#AAA6CF] hover:text-white transition-colors"
            >
              <BsLinkedin size={24} />
            </a>
          </div>
          <a
            href="/resume/Chris_Nohall_CV.pdf"
            target="_blank"
            className="bg-white/5 hover:bg-white/10 text-white px-6 py-2 rounded-lg text-sm font-bold transition-all border border-white/10"
          >
            {t('common:resume')}
          </a>
        </div>
      </div>
    </footer>
  );
}
