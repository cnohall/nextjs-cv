import { Navbar, Container, Nav } from 'react-bootstrap';
import { BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';
import { I18N_NAMESPACES } from '../../../helpers/constants';

export default function Footer() {
  const { t } = useTranslation([I18N_NAMESPACES.COMMON]);
  const year = new Date().getFullYear();

  return (
    <Navbar variant="dark" className="mt-5 border-top border-secondary py-4">
      <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="text-silver mb-3 mb-md-0" style={{ fontSize: '0.9rem' }}>
          <div>{t('common:copyright', { year })}</div>
          <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{t('common:built_with')}</div>
        </div>
        
        <div className="d-flex align-items-center">
          <Nav className="me-3">
            <Nav.Link href="https://github.com/cnohall/cnohall" target="_blank">
              <BsGithub size={22} />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/christopher-nohall/" target="_blank">
              <BsLinkedin size={22} />
            </Nav.Link>
            <Nav.Link href="https://stackoverflow.com/users/12072571/cnohall" target="_blank">
              <BsStackOverflow size={22} />
            </Nav.Link>
          </Nav>
          <Nav.Link href="/resume/Chris_Nohall_CV.pdf" target="_blank">
            <Button variant="outline-success" size="sm">Resume</Button>
          </Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
}
