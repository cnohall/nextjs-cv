import Link from 'next/link';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs';


export default function Footer() {
  return (
    <Navbar variant='dark'>
        <Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"> 
          <Link href="/resume/Chris_Nohall_CV.pdf" passHref>
            <Button
              variant="outline-success mx-1"
            >
              Resume
            </Button>   
          </Link>
          <Nav> 
            <Link href="https://github.com/cnohall/cnohall"passHref>
              <Nav.Link><BsGithub className="mx-1" /></Nav.Link>
            </Link>
            <Link href="https://www.linkedin.com/in/christopher-nohall/"passHref>
              <Nav.Link><BsLinkedin className="mx-1" /></Nav.Link>
            </Link>
            <Link href="https://stackoverflow.com/users/12072571/cnohall"passHref>
              <Nav.Link><BsStackOverflow className="mx-1"/></Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}