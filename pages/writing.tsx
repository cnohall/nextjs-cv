import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import { Container, Card } from 'react-bootstrap'
import Link from 'next/link'

export default function Writing({ allPostsData }) {
  return (
    <Container>
      <Head>
        <title>{`Chris Nohall's Writing`}</title>
      </Head>
      <h3 className='my-5'>{`Welcome to my writting corner! I write about coding, with an easy-going and personal perspective.`}</h3>
        {allPostsData.map(({ id, date, title }) => (
          <Link href={`/writing/${id}`} passHref key={id}>
            <Card 
              style={{ width: '100%', 'border-bottom': 'solid'}} 
              className='my-3'
              role='button'
              text='white'
              bg='secondary' 
            >
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {`Some quick example text to build on the card title and make up the bulk of
                  the card's content.`}
                </Card.Text>
                <Card.Text>{date}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
    </Container>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}