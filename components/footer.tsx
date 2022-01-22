import Link from 'next/link'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs';


export default function Footer() {
  return (
    <Navbar variant='dark'>
        <Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">    
          <Nav> 
            <Link href="https://github.com/cnohall/cnohall"passHref><Nav.Link><BsGithub/></Nav.Link></Link>
            <Link href="https://www.linkedin.com/in/christopher-nohall/"passHref><Nav.Link><BsLinkedin/></Nav.Link></Link>
            <Link href="https://stackoverflow.com/users/12072571/cnohall"passHref><Nav.Link><BsStackOverflow/></Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}