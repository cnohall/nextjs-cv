'use client';

import { I18N_NAMESPACES } from '../../../helpers/constants';
import { useTranslation } from 'next-i18next';
import ChangeLanguageDropdown from '../../atoms/ChangeLanguageDropdown';
import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from '../MobileMenu'; // Import the MobileMenu component

const Navigationbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-6">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-black tracking-tighter hover:text-accent-primary transition-colors"
        >
          CN.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#about"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            {t('common:about')}
          </Link>
          <Link
            href="/#work"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            {t('common:work')}
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            {t('common:projects')}
          </Link>
          <Link
            href="/writing"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            {t('common:writing')}
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            {t('common:contact')}
          </Link>
          <ChangeLanguageDropdown />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-text-primary focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </nav>
  );
};

export default Navigationbar;
