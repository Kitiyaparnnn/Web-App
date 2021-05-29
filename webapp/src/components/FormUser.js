import React, { Component } from "react";
import Step from "./Step";
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
    const { value, handleChange } = this.props;
    return (
      <div>
        <div className="header">
          <Step steps="2" />
        </div>
        <div className="container">
          <form>
            <h3>USER FORM</h3>
            <div>
              <br />
              <input
                type="text"
                placeholder="First Name"
                onChange={handleChange("firstname")}
                defaultValue={value.firstname}
              ></input>
            </div>
            <div>
              <br />
              <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange("lastname")}
                defaultValue={value.lastname}
              ></input>
            </div>
            <div>
              <button onClick={this.back}>Back</button>
              <button onClick={this.continue}>Continue</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormUser;
