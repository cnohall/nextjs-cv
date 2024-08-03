import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { I18N_NAMESPACES, LANGUAGES } from '../../../helpers/constants';

import { useEffect, useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

export default function Navigationbar() {
  const [language, setLanguage] = useState();
  const { t } = useTranslation([I18N_NAMESPACES.COMMON]);

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  const changeLanguage = (lng) => {
    setLanguage(lng);
    return;
  };

  return (
    <Navbar variant="dark">
      <Container>
        {/* <Link href="/"passHref><Navbar.Brand>{'Chris Nohall'}</Navbar.Brand></Link> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link href="/" passHref>
              <Nav.Link>{t('common:home')}</Nav.Link>
            </Link>
            <Link href="/work" passHref>
              <Nav.Link>{t('common:work')}</Nav.Link>
            </Link>
            <Link href="/writing" passHref>
              <Nav.Link>{t('common:writing')}</Nav.Link>
            </Link>
            <Link href="/projects" passHref>
              <Nav.Link>{t('common:projects')}</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link>{t('common:contact')}</Nav.Link>
            </Link>
            <NavDropdown title={t('common:languages')} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => changeLanguage(LANGUAGES.zh)}>
                {t('common:chinese')}
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage(LANGUAGES.en)}>
                {t('common:english')}
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage(LANGUAGES.kr)}>
                {t('common:korean')}
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage(LANGUAGES.sv)}>
                {t('common:swedish')}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
