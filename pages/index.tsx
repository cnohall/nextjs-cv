import Head from 'next/head';
import Image from 'next/image';

import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import { I18N_NAMESPACES } from '../helpers/constants';

import myImage from '../assets/images/cartoon_me.png';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { t } = useTranslation([I18N_NAMESPACES.COMMON]);
  return (
    <Container className={styles.center}>
      <Head>
        <title>{"Chris Nohall's Portfolio"}</title>
        {/* Change this for create better SEO */}
        <meta name="description" content="Chris Nohall's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row xs={1} sm={2} className="d-flex align-items-center">
        <Col>
          <h1>{t('common:frontendDeveloper')}</h1>
          <h3>{t('common:basedInKorea')}</h3>
        </Col>
        <Col className="d-flex justify-content-center mt-5">
          <Image
            className="rounded "
            src={myImage}
            alt="Drawing of Chris Nohall"
            width={213}
            height={403}
          />
        </Col>
      </Row>
    </Container>
  );
}
