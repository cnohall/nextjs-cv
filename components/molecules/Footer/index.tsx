import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';
import { I18N_NAMESPACES } from '../../../helpers/constants';
import Link from 'next/link';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border-light py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-text-secondary text-sm">{t('common:copyright', { year })}</p>
          <p className="text-text-secondary/50 text-xs mt-1">{t('common:built_with')}</p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <a
              href="https://github.com/cnohall/cnohall"
              target="_blank"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <BsGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/christopher-nohall/"
              target="_blank"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <BsLinkedin size={24} />
            </a>
            <Link
              href="/writing"
              className="text-text-secondary hover:text-text-primary transition-colors text-sm font-bold"
            >
              {t('common:writing')}
            </Link>
          </div>
          <a
            href="/resume/Chris_Nohall_CV.pdf"
            target="_blank"
            className="bg-border-light/20 hover:bg-border-light/30 text-text-primary px-6 py-2 rounded-lg text-sm font-bold transition-all border border-border-light"
          >
            {t('common:resume')}
          </a>
        </div>
      </div>
    </footer>
  );
}
