import { I18N_NAMESPACES } from '../../../helpers/constants';
import { useTranslation } from 'next-i18next';
import ChangeLanguageDropdown from '../../atoms/ChangeLanguageDropdown';
import Link from 'next/link';

const Navigationbar = () => {
  const { t } = useTranslation([I18N_NAMESPACES.COMMON]);

  return (
    <nav className="py-6">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-black tracking-tighter hover:text-green-500 transition-colors"
        >
          CN.
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#about"
            className="text-sm font-medium text-[#AAA6CF] hover:text-white transition-colors"
          >
            {t('common:about')}
          </Link>
          <Link
            href="/#work"
            className="text-sm font-medium text-[#AAA6CF] hover:text-white transition-colors"
          >
            {t('common:work')}
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium text-[#AAA6CF] hover:text-white transition-colors"
          >
            {t('common:projects')}
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-[#AAA6CF] hover:text-white transition-colors"
          >
            {t('common:contact')}
          </Link>
          <ChangeLanguageDropdown />
        </div>

        {/* Mobil-meny kan läggas till här vid behov */}
      </div>
    </nav>
  );
};

export default Navigationbar;
