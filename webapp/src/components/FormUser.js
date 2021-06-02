import React, { Component } from "react";
import Step from "./Step";
import Button from "@material-ui/core/Button";

export class FormUser extends Component {
  state = {
    stream: null,
  };

  // componentDidMount = () => {
  //   if (navigator.mediaDevices.getUserMedia) {
  //     navigator.mediaDevices
  //       .getUserMedia({ video: true })
  //       .then(function (stream) {
  //         this.setState({ stream });
  //         // video.srcObject = stream;
  //       })
  //       .catch(function (err0r) {
  //         console.log("Something went wrong!");
  //       });
  //   }
  // };

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

    const { stream } = this.state;

    return (
      <div>
        <div className="header">
          <Step steps="3" />
        </div>
        <div className="container">
          <form>
            <h3>USER FORM</h3>
            <div>
              <label>ชื่อ</label>
              <br />
              <input
                type="text"
                placeholder="First Name"
                onChange={handleChange("firstname")}
                defaultValue={value.firstname}
              ></input>
            </div>
            <div>
              <label>นามสกุล</label>
              <br />
              <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange("lastname")}
                defaultValue={value.lastname}
              ></input>
            </div>
            <div>
              <label>หมายเลขบัตรประชาชน</label>
              <br />
              <input
                type="text"
                placeholder="ID Card"
                onChange={handleChange("id_card")}
                defaultValue={value.id_card}
              ></input>
            </div>
            <div>
              <label>ที่อยู่รับซิม และ เบอร์โทรศัพท์</label>
              <br />
              <input
                type="text"
                placeholder="Address & Mobile No."
                onChange={handleChange("addess")}
                defaultValue={value.address}
              ></input>
            </div>
            <div>
              <label><i class="fa fa-camera" aria-hidden="true"></i> อัพโหลดรูปถ่าย</label>
              <h1 className="label_red">ถือบัตรประชาชนไว้ใกล้กับใบหน้า</h1>
              {/* {
                <video
                  autoPlay="true"
                  id="videoElement"
                  srcObject={stream}
                ></video>
              } */}
              <input type='file' onChange={handleChange("picture")}
                defaultValue={value.picture}></input>
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
