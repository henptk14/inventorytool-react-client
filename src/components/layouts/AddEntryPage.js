import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import "./AddEntryPage.css";
import { MenuItem, Button } from "@material-ui/core";

class AddEntryPage extends Component {
  renderProductIdInput = ({ input, label }) => {
    //console.log(input);
    return (
      <div className="productId-field" style={{ textAlign: "center" }}>
        <TextField
          fullWidth
          label={label}
          margin="normal"
          variant="outlined"
          {...input}
          inputProps={{ maxLength: 11 }}
        />
      </div>
    );
  };

  renderCategoryInput = ({ input, label }) => {
    //console.log(input);
    return (
      <div className="category-field" style={{ textAlign: "center" }}>
        <TextField
          fullWidth
          select
          variant="outlined"
          label={label}
          {...input}
          margin="normal"
        >
          <MenuItem value={"appr"}>appr</MenuItem>
          <MenuItem value={"tool"}>tool</MenuItem>
          <MenuItem value={"misc"}>misc</MenuItem>
        </TextField>
      </div>
    );
  };

  renderProductNameInput = ({ input, label }) => {
    //console.log(input)
    return (
      <div className="productName-field">
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label={label}
          {...input}
          inputProps={{ maxLength: 30 }}
        />
      </div>
    );
  };

  renderQuantityOnhandInput = ({ input, label }) => {
    //console.log(input)
    return (
      <div className="quantityOnhand-field">
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label={label}
          {...input}
          inputProps={{
            type: "number",
            min: "0",
            max: "99999999999"
          }}
        />
      </div>
    );
  };

  renderDescriptionInput = ({ input, label }) => {
    //console.log(input)
    return (
      <div className="description-field" style={{ textAlign: "center" }}>
        <TextField
          variant="outlined"
          margin="normal"
          label={label}
          {...input}
          multiline
          rows={3}
          rowsMax={5}
          inputProps={{ maxLength: 100 }}
          style={{ width: "700px" }}
        />
      </div>
    );
  };

  render() {
    //console.log(this.props);
    return (
      <form autoComplete="off">
        <Grid
          container
          spacing={3}
          justify="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid item xs={6} sm={6}>
            <Field
              name="productId"
              label="Product ID"
              component={this.renderProductIdInput}
            />
          </Grid>

          <Grid item xs={6} sm={6}>
            <Field
              name="category"
              label="Category"
              component={this.renderCategoryInput}
            />
          </Grid>

          <Grid item xs={6} sm={6}>
            <Field
              name="productName"
              label="Product Name"
              component={this.renderProductNameInput}
            />
          </Grid>

          <Grid item xs={6} sm={6}>
            <Field
              name="quantityOnhand"
              label="Quantity Onhand"
              component={this.renderQuantityOnhandInput}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <Field
              name="description"
              label="Description"
              component={this.renderDescriptionInput}
            />
          </Grid>

          <Grid item>
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained">Reset</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default reduxForm({ form: "AddEntryPage" })(AddEntryPage);
