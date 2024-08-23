import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { DEFAULT_LANGUAGE, I18N_NAMESPACES, LANGUAGES } from '../../../helpers/constants';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

const Navigationbar = () => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE); // TODO: Enable language change
  const { t } = useTranslation([I18N_NAMESPACES.COMMON]);

  const changeLanguage = (lng) => {
    // TODO: Enable language change
    console.log('Changing language to:', lng);
  };

  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/#about">{t('common:about')}</Nav.Link>
            <Nav.Link href="/#work">{t('common:work')}</Nav.Link>
            <Nav.Link href="/#contact">{t('common:contact')}</Nav.Link>
            <Nav.Link href="/writing">{t('common:writing')}</Nav.Link>
            <Nav.Link href="/projects">{t('common:projects')}</Nav.Link>
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
};

export default Navigationbar;
