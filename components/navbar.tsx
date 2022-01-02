import Image from 'next/image'
import Link from 'next/link'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export default function Navigationbar() {
  return (
    <Navbar bg="light" variant='light' expand="lg">
        <Container>
            <Link href="/"passHref><Navbar.Brand>{`Chris Nohall's Portfolio`}</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">       
                <Link href="/"passHref><Nav.Link>Home</Nav.Link></Link>
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                    <Link href="/projects/first"passHref><NavDropdown.Item>Project 1</NavDropdown.Item></Link>
                    <Link href="/projects/second"passHref><NavDropdown.Item>Project 2</NavDropdown.Item></Link>
                    <Link href="/projects/third"passHref><NavDropdown.Item>Project 3</NavDropdown.Item></Link>
                    <NavDropdown.Divider />
                    <Link href="/projects/summary"passHref><NavDropdown.Item>Summary</NavDropdown.Item></Link>
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