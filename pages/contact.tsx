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
        <meta name="description" content="Contact Chris Nohall" />
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
          <Row xs={1} sm={2}>
            <Col>
              <Form.Group className="my-2">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="my-2">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email address" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Hi, we need a frontend developer to on our website at Company X. How soon can we hop on a call to discuss this?" />
          </Form.Group>

          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
        </Col>

      </Row>
    </Container>
  )
}
