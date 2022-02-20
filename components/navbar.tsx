import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LANGUAGES } from '../helpers/constants';

import { useEffect, useState } from 'react';
import i18next from 'i18next';

export default function Navigationbar() {

  const [language, setLanguage] = useState();

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  const changeLanguage = (lng) => {
    setLanguage(lng);
    return;
  };

  return (
    <Navbar variant='dark'>
        <Container >
            {/* <Link href="/"passHref><Navbar.Brand>{'Chris Nohall'}</Navbar.Brand></Link> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">       
              <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
              <Link href="/work" passHref><Nav.Link>Work</Nav.Link></Link>
              <Link href="/writing" passHref><Nav.Link>Writing</Nav.Link></Link>
              <Link href="/projects" passHref><Nav.Link>Projects</Nav.Link></Link>
              <Link href="/contact" passHref><Nav.Link>Contact</Nav.Link></Link>
              <NavDropdown title="Languages" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => changeLanguage(LANGUAGES.zh)}>
                  Chinese (Mandarin)
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage(LANGUAGES.en)}>
                  English
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage(LANGUAGES.kr)}>
                  Korean
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage(LANGUAGES.sv)}>
                  Swedish
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}