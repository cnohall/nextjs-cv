import { NavDropdown } from 'react-bootstrap';
import { I18N_NAMESPACES, LANGUAGES } from '../../../helpers/constants';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ChangeLanguageDropdown = () => {
  const { t, i18n } = useTranslation([I18N_NAMESPACES.COMMON]);
  const router = useRouter();

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  const changeLocale = async (locale: string) => {
    if (i18n.language !== locale) {
      router.push(router.asPath, undefined, { locale });
    }
  };

  return (
    <NavDropdown title={t('common:languages')} id="basic-nav-dropdown">
      <NavDropdown.Item onClick={() => changeLocale(LANGUAGES.zh)}>
        {t('common:chinese')}
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => changeLocale(LANGUAGES.en)}>
        {t('common:english')}
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => changeLocale(LANGUAGES.kr)}>
        {t('common:korean')}
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => changeLocale(LANGUAGES.sv)}>
        {t('common:swedish')}
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default ChangeLanguageDropdown;
