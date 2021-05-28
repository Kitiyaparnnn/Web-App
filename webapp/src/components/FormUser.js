import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export class FormUser extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          primary={true}
          onClick={this.continue}
        >
          Continue
        </Button>
        <Button
          variant="contained"
          color="secondary"
          primary={true}
          onClick={this.back}
        >
          Back
        </Button>
      </div>
    );
  }
}

export default FormUser;
