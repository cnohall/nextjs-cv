import Image from 'next/image'
import Link from 'next/link'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export default function Navigationbar() {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Link href="/"passHref><Navbar.Brand>{`Chris Nohall's Portfolio`}</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">       
                <Link href="/"passHref><Nav.Link>Home</Nav.Link></Link>
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Summary</NavDropdown.Item>
                </NavDropdown>
                <Link href="/gongdo-tech"passHref><Nav.Link>Gongdo Tech</Nav.Link></Link>
                <Link href="/about"passHref><Nav.Link>About</Nav.Link></Link>
                <Link href="/contact"passHref><Nav.Link>Contact</Nav.Link></Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}