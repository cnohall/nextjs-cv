import Link from 'next/link'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export default function Footer() {
  return (
    <Navbar bg="secondary" variant='dark'>
        <Container>
            <Nav className="me-auto">       
                <Link href="/"passHref><Nav.Link>Home</Nav.Link></Link>
                <Link href="/about"passHref><Nav.Link>About</Nav.Link></Link>
                <Link href="/contact"passHref><Nav.Link>Contact</Nav.Link></Link>
            </Nav>
        </Container>
    </Navbar>
  )
}