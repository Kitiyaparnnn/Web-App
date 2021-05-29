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
          <Step steps="4" />
        </div>
        <div className="container">
          <form>
            {" "}
            <h3>CONFIRM</h3>
            <div>
              <h4>Track Order</h4>
            </div>
            <div>
              <button onClick={this.back}>Back</button>
              <button>Confirm</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Confirm;
