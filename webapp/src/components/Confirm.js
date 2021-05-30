import React, { Component } from "react";
import "./Confirm.css";
import Step from "./Step";

export class Confirm extends Component {
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
          <Step steps="4" />
        </div>
        <div className="container">
          <form>
            {" "}
            <h3>CONFIRM</h3>
            <div>
              <h4>Track Order : 00000</h4>
              <p>ชื่อ : {firstname}</p>
              <p>นามสกุล : {lastname}</p>
              <p>เลขบัตรประชาชน : {id_card}</p>
              <p>ที่อยู่ : {address}</p>
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
              <button>Confirm</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Confirm;
