import Link from 'next/link'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export default function Footer() {
  return (
    <Navbar variant='dark'>
        <Container>
            <Nav className="m-auto">       
                <Link href="/"passHref><Nav.Link>Home</Nav.Link></Link>
                <Link href="/work"passHref><Nav.Link>Work</Nav.Link></Link>
                <Link href="/resume"passHref><Nav.Link>Resume</Nav.Link></Link>
                <Link href="/contact"passHref><Nav.Link>Contact</Nav.Link></Link>
            </Nav>
        </Container>
    </Navbar>
  )
}