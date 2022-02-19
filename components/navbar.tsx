import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function Navigationbar() {
  return (
    <Navbar variant='dark'>
        <Container >
            {/* <Link href="/"passHref><Navbar.Brand>{'Chris Nohall'}</Navbar.Brand></Link> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">       
              <Link href="/"passHref><Nav.Link>Home</Nav.Link></Link>
              <Link href="/work"passHref><Nav.Link>Work</Nav.Link></Link>
              <Link href="/writing"passHref><Nav.Link>Writing</Nav.Link></Link>
              <Link href="/projects"passHref><Nav.Link>Projects</Nav.Link></Link>
              <Link href="/contact"passHref><Nav.Link>Contact</Nav.Link></Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}