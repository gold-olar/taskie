/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";

function NotFoundPage(props) {
  return (
    <>
      <div style={{ padding: "50px", width: "100%", textAlign: "center" }}>
        The page <code>{props.location.pathname}</code> could not be found.
      </div>

      <Container>
        <Row>
          <Col className="m-auto" md={4}>
            <Button
              onClick={() => props.history.goBack()}
              className="btn-block"
              variant="primary"
            >
              Go Back
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NotFoundPage;
