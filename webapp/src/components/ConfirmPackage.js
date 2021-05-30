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
    const {
      value: {
        simFor,
        simTimeSN,
        simTimeDN,
        simSpeed,
        firstname,
        lastname,
        id_card,
        address,
        picture,
      },
    } = this.props;
    
    const cost = () => {
      if (simTimeSN === "unlimited") return (+simTimeDN / 100) * 0.25 + +simSpeed;
      else return (simTimeSN / 100 + simTimeDN / 100) * 0.25 + +simSpeed;
    };

    return (
      <div>
        <div className="header">
          <Step steps="2" />
        </div>
        <div className="container">
          <form>
            <h3>CONFIRM PACKAGE</h3>
            <div className="packageCost">
              <br />
              <h1>sim card & cost detials</h1>
              <p>โทรในเครือข่าย (นาที) : {simTimeSN}</p>
              <p>โทรนอกเครือข่าย (นาที) : {simTimeDN}</p>
              <p>ความเร็ว (GB) : {simSpeed}</p>
              <hr />
              <p>
                ราคาแพ็กเกจ (บาท/เดือน) : <h3>{cost()}</h3>
              </p>
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
