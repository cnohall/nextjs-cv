import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs';

export default function Footer() {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/resume/Chris_Nohall_CV.pdf">
            <Button variant="outline-success mx-1">Resume</Button>
          </Nav.Link>
          <Nav>
            <Nav.Link href="https://github.com/cnohall/cnohall">
              <BsGithub className="mx-1" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/christopher-nohall/">
              <BsLinkedin className="mx-1" />
            </Nav.Link>
            <Nav.Link href="https://stackoverflow.com/users/12072571/cnohall">
              <BsStackOverflow className="mx-1" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
