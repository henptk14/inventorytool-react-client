import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./MenuOption.css";

const MenuOption = () => {
  return (
    <div className="m-2">
      <Container>
        <Row className="m-2">
          <Col className="text-center" xs={12} md>
            <Button className="m-2 ButtonSize">Add New Entry</Button>
          </Col>
          <Col className="text-center" xs={12} md>
            <Button className="m-2 ButtonSize">Update Entry</Button>
          </Col>
          <Col className="text-center" xs={12} md>
            <Button className="m-2 ButtonSize">Delete Entry</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuOption;
