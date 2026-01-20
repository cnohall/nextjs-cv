import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { I18N_NAMESPACES } from '../../../helpers/constants';
import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const navLinks = [
    { href: '/#about', label: t('common:about') },
    { href: '/#work', label: t('common:work') },
    { href: '/projects', label: t('common:projects') },
    { href: '/writing', label: t('common:writing') },
    { href: '/#contact', label: t('common:contact') },
  ];

  return (
    <div
      className={`fixed inset-0 bg-background-primary z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-white text-3xl">
          &times;
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center h-full space-y-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-3xl font-bold text-text-primary hover:text-accent-primary transition-colors"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
