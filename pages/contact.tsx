import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from '../../styles/Home.module.css';
import emailjs from '@emailjs/browser';
import BootstrapToast from '../components/molecules/toast';

const messagePlaceholder =
  'Hi, we need a frontend developer to on our website at Company X. ' +
  'How soon can we hop on a call to discuss this?';

export default function Contact() {
  const form = useRef();
  const [sentEmail, setSentEmail] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [message, setMessage] = useState<object>({});

  const sendEmail = (e) => {
    e.preventDefault();
    if (sentEmail) {
      setMessage({
        title: 'Again?',
        comment: 'woops!',
        body: 'You have already sent an email',
      });
      setShowToast(true);
      return;
    }
    const userId = process.env.NEXT_PUBLIC_USER_ID;
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
      (result) => {
        setMessage({
          title: 'Your message is on the way',
          comment: 'Success',
          body: 'Thanks for getting in touch',
        });
        setShowToast(true);
        setSentEmail(true);
      },
      (error) => {
        setMessage({
          title: 'Sorry, something went wrong',
          comment: 'Error',
          // eslint-disable-next-line quotes
          body: "I'm sorry for the inconvinience.",
        });
        setShowToast(true);
      },
    );
  };
  return (
    <Container className={styles.center}>
      <Head>
        <title>{'Contact Me'}</title>
        {/* Change this for create better SEO */}
        <meta name="description" content="Contact Chris Nohall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row xs={1} sm={2}>
        <Col>
          <h1 className="my-">Contact Me</h1>
          <h4 className="my-4">
            {'Want to say "Hey!"? Got something you\'d like to ask? '}
            {'New project or opportunity? Want to hire me? Contact me!'}
          </h4>
          <h4 className="my-4">
            Use the form. Alternatively, shoot me an email at christopher.nohall@gmail.com.
          </h4>
          <h4 className="my-4">Prefer a face to face? Schedule a call.</h4>
        </Col>
        <Col>
          {showToast && <BootstrapToast message={message} setShowToast={setShowToast} />}
          <Form ref={form} onSubmit={sendEmail}>
            <Row xs={1} sm={2}>
              <Col>
                <Form.Group className="my-2">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    required
                    name="from_name"
                    type="text"
                    placeholder="Enter your name"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="my-2">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    required
                    name="reply_to"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                required
                name="message"
                as="textarea"
                rows={3}
                placeholder={messagePlaceholder}
              />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
