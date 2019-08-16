import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import "./AddEntryPage.css";

class AddEntryPage extends Component {
  constructor() {
    super();
    this.state = {
      category: "",
      description: "",
      productId: "",
      productName: "",
      quantityOnhand: 0
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="productId">
            <Form.Label>Product ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product ID"
              as="input"
              maxLength="11"
              name="productId"
              value={this.state.productId}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="selectCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={this.state.category}
              onChange={this.onChange}
            >
              <option value="none" defaultValue hidden>
                Select a Category
              </option>
              <option value="appr">appr</option>
              <option value="tool">tool</option>
              <option value="coconut">offc</option>
              <option value="mango">gen</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Name"
              as="input"
              maxLength="30"
              name="productName"
              value={this.state.productName}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="quantityOnhand">
            <Form.Label>Quantity Onhand</Form.Label>
            <Form.Control
              as="input"
              type="number"
              name="quantityOnhand"
              value={this.state.quantityOnhand}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Description"
              maxLength="100"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </Form.Group>

          <Container>
            <Row className="justify-content-md-center">
              <Col md="auto" className="text-center m-1">
                <Button
                  className="FormButtonSize"
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Col>
              <Col md="auto" className="text-center m-1">
                <Button
                  className="FormButtonSize"
                  variant="danger"
                  type="reset"
                >
                  Reset
                </Button>
              </Col>
              <Col md="auto" className="text-center m-1">
                <Link to="/">
                  <Button className="FormButtonSize" variant="danger">
                    Cancel
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    );
  }
}

export default AddEntryPage;
