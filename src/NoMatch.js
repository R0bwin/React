import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

export const NoMatch = () => (
  <Container>
    <Row className="mt-5">
      <Col sm={12}>
        <h1>Error 404</h1>
        <p>You have landed on a page that don't exist</p>
      </Col>
    </Row>
  </Container>
)