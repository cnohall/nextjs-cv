import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import cardStyles from '../styles/card.module.css';

export default function Writing({ allPostsData }) {
  return (
    <Container className='white'>
      <Head>
        <title>{'Chris Nohall\'s Writing'}</title>
      </Head>
      <h3 className='my-5'>
        {'Welcome to my writting corner! I write about coding, with an easy-going and personal perspective.'}
      </h3>
        <Row xs={1} sm={2} className='d-flex align-items-center'>
        {allPostsData.map(({ id, date, title, description, readtime }) => (
          <Col key={id} className='my-2'>
            <Link href={`/writing/${id}`} passHref>
              <Card 
                className={cardStyles.card}
                role='button'
                style={{height: '10rem'}}
              >
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    {description || ''}
                  </Card.Text>
                  <Card.Text><small>
                    {`Posted: ${date}`}</small><small>{` Read time: ${readtime || ''}`}
                  </small></Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
        </Row>
    </Container>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}