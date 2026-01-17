import Head from 'next/head';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { I18N_NAMESPACES } from '../helpers/constants';

export default function Projects() {
  const { t } = useTranslation([I18N_NAMESPACES.COMMON]);

  const projects = [
    {
      title: 'PolarisAudit',
      description: t('common:polarisaudit_desc'),
      link: 'https://polarisaudit.com/',
    },
    {
      title: 'EmptyInbox',
      description: t('common:emptyinbox_desc'),
      link: 'https://emptyinbox.me/',
    },
    {
      title: 'RKExplorer',
      description: t('common:rkexplorer_desc'),
      link: 'https://rkexplorer.blockonomics.co/',
    },
  ];

  return (
    <Container className="py-5">
      <Head>
        <title>{t('common:projects_title')} | Chris Nohall</title>
      </Head>
      <h1 className="mb-4 text-white">{t('common:projects_title')}</h1>
      <p className="mb-5 text-silver">{t('common:projects_description')}</p>
      
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 bg-dark text-white border-secondary">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className="text-silver flex-grow-1">
                  {project.description}
                </Card.Text>
                <Button 
                  variant="outline-success" 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {t('common:visit_website')}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [I18N_NAMESPACES.COMMON])),
    },
  };
}
