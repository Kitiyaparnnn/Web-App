import React, { Component } from "react";
import "./FormSimCard.css";
import Step from "./Step";

export class FormSimCard extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { value, handleChange } = this.props;

    return (
      <div>
        <div className="header">
          <Step steps="1" />
        </div>
        <div className="container">
          <form>
            <h3>CREATE SIM CARD</h3>
            <div>
              <label>โทรในเครือช่าย (นาที)</label>
              <br />
              <label className='label_red'>ฟรี 24 ชั่วโมง</label>
              <br></br>
              <select
                onChange={handleChange("simTimeSN")}
                defaultValue={value.simTimeSN}
              >
                <option >Choose Time</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="500">500</option>
                <option value="unlimited">Unlimited</option>
              </select>
            </div>
            <div>
              <label>โทรนอกเครือช่าย (นาที)</label>
              <br />
              <select
                onChange={handleChange("simTimeDN")}
                defaultValue={value.simTimeDN}
              >
                <option >Choose Time</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="500">500</option>
              </select>
            </div>
            <div>
              <label>ความเร็ว full speed(GB)</label>
              <br />
              <select
                onChange={handleChange("simSpeed")}
                defaultValue={value.simSpeed}
              >
                <option >Choose Speed</option>
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="60">60</option>
                <option value="80">80</option>
                {/* {renderTime} */}
              </select>
            </div>
            <div>
              <button onClick={this.continue}>Continue</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormSimCard;
