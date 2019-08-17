import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
// import { Link } from "react-router-dom";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
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

  renderProductIdInput = formProps => {
    console.log(formProps);
    return (
      <div className="form-group">
        <label htmlFor="productId">{formProps.label}</label>
        <input
          id="productId"
          type="text"
          placeholder={formProps.label}
          maxLength="11"
          name={formProps.input.name}
          onChange={formProps.input.onChange}
        />
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <form className="needs-validation" noValidate>
          <Field
            name="productId"
            label="Product ID"
            component={this.renderProductIdInput}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "AddEntryPage" })(AddEntryPage);
