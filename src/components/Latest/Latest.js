// Latest.js
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './Latest.css';

const Latest = () => {
  return (
    <div className="container-spacing">
      <h2 className="text-center mt-4 mb-4">Latest Releases</h2>
      <Row className="justify-content-md-center">
        <Col sm={6} md={3}>
          <Card id='cc-card1' className="latest-card text-center mb-4">
            {/* <Card.Header className="latest-card-header">Hello</Card.Header> */}
            <Card.Body className="latest-card-body"></Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={3}>
          <Card id='cc-card2' className="latest-card text-center mb-4">
            {/* <Card.Header className="latest-card-header">Easy on Me</Card.Header> */}
            <Card.Body className="latest-card-body"></Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={3}>
          <Card id='cc-card3' className="latest-card text-center mb-4">
            {/* <Card.Header className="latest-card-header">Someone like You</Card.Header> */}
            <Card.Body className="latest-card-body"></Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={3}>
          <Card id='cc-card4' className="latest-card text-center mb-4">
            {/* <Card.Header className="latest-card-header">Rolling in the Deep</Card.Header> */}
            <Card.Body className="latest-card-body"></Card.Body>
          </Card>
        </Col>
      </Row>
      <div className='latest-blackdiv'>
        <h3>Stay Updated</h3>
        <div className="latest-subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Latest;