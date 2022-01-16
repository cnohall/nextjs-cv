import Head from 'next/head'
import Image from 'next/image'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function Contact() {
  return (
    <Container className={styles.center}>
      <Head>
        <title>{`Contact Me`}</title>
        {/* Change this for create better SEO */}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row xs={1} sm={2}>
        <Col>
          <h1 className='my-'>Contact Me</h1>
          <h4 className='my-4'>{`Want to say "Hey!"? Got something you'd like to ask? New project or opportunity? Want to hire me? Contact me!`}</h4>
          <h4 className='my-4'>Use the form below. Alternatively, shoot me an email at christopher.nohall@gmail.com.</h4>
          <h4 className='my-4'>Prefer a face to face? Schedule a call.</h4>
        </Col>
        <Col>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              {`We'll never share your email with anyone else.`}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Col>

      </Row>
    </Container>
  )
}
