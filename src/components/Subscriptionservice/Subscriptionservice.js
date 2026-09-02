import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link component
import AuthService from '../AuthService/AuthService';

const Subscriptionservice = () => {
  // Don't show membership subscription plans to users who are already logged in
  if (AuthService.isLoggedIn()) {
    return null;
  }

  return (
    <div className="container mb-4">
      <h2 className="text-center mt-4 mb-4">Security Screening</h2>
      <Row className="justify-content-md-center">
        
        <Col sm={6} md={4}>
          <Card className="text-center mb-4" style={{ padding: '50px', height: '100%' }}>
            <Card.Header>Security Screening Includes</Card.Header>
            <Card.Body>
              <ul>
                <li>Identity and contact verification</li>
                <li>Background and security screening</li>
                <li>Approval before backstage or restricted-area access</li>
              </ul>
              {/* Link to VIP subscription page */}
              <Link to="/VIPSubscription "><Button variant="primary">Register</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Subscriptionservice;