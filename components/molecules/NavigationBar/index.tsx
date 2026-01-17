import { Navbar, Container, Nav } from 'react-bootstrap';
import { DEFAULT_LANGUAGE, I18N_NAMESPACES } from '../../../helpers/constants';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import ChangeLanguageDropdown from '../../atoms/ChangeLanguageDropdown';

const Navigationbar = () => {
  const { t } = useTranslation([I18N_NAMESPACES.COMMON]);

  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/#about">{t('common:about')}</Nav.Link>
            <Nav.Link href="/#work">{t('common:work')}</Nav.Link>
            <Nav.Link href="/projects">{t('common:projects')}</Nav.Link> {/* Ny länk */}
            <Nav.Link href="/#contact">{t('common:contact')}</Nav.Link>
            <ChangeLanguageDropdown />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
