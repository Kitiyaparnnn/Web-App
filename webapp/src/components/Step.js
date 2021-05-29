import React from "react";
import "./Step.css";

function Step({ steps }) {
  switch (steps) {
    case "1":
      return (
        <div>
          <div id="progress1"></div>
          <div className="step_row">
            <div className="step_col">
              <h4>Step1</h4>
            </div>
            <div className="step_col">
              <h4>Step2</h4>
            </div>
            <div className="step_col">
              <h4>Step3</h4>
            </div>
          </div>
        </div>
      );
    case "2":
      return(
        <div>
        <div id="progress2"></div>
        <div className="step_row">
          <div className="step_col">
            <h4>Step1</h4>
          </div>
          <div className="step_col">
            <h4>Step2</h4>
          </div>
          <div className="step_col">
            <h4>Step3</h4>
          </div>
        </div>
      </div>
      )
      case "3":
        return(
          <div>
          <div id="progress3"></div>
          <div className="step_row">
            <div className="step_col">
              <h4>Step1</h4>
            </div>
            <div className="step_col">
              <h4>Step2</h4>
            </div>
            <div className="step_col">
              <h4>Step3</h4>
            </div>
          </div>
        </div>
        )
  }
}

export default Step;
