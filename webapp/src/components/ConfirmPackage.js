import React, { Component } from "react";
import Step from "./Step";

export class ConfirmPackage extends Component {
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
        <div className="header">
          <Step steps="2" />
        </div>
        <div className="container">
          <form>
            <h3><i class="fa fa-gift" aria-hidden="true"></i> CONFIRM PACKAGE</h3>
            <div className="packageCost">
              <br />
              <h1>sim card & cost detials</h1>
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

export default ConfirmPackage;
