import React, { Component } from "react";
import "./Confirm.css";
import Step from "./Step";

export class Confirm extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { value, handleChange } = this.props;

    return (
      <div>
        <div className="header">
          <Step steps="3" />
        </div>
        <div className="container">
          <h3>CONFIRM</h3>
          <form>
            <div>
            <h4>detials to confirm & cost</h4>
          </div>
          <div>
            <button onClick={this.back}>Back</button>
            <button>Print</button>
          </div>
          </form>
          
        </div>
      </div>
    );
  }
}

export default Confirm;
