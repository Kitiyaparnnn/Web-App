import React, { useState } from "react";
import Step from "./Step";
import Webcam from "react-webcam";

function FormUser2(props) {
  
    const WebcamCapture = () => {
        const webcamRef = React.useRef(null);
        const [imgSrc, setImgSrc] = React.useState(null);
      
        const capture = React.useCallback(() => {
          const imageSrc = webcamRef.current.getScreenshot();
          setImgSrc(imageSrc);
          console.log(imageSrc);
        }, [webcamRef, setImgSrc]);
      
        return (
          <>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
            <br />
            <button onClick={capture}><i class="fa fa-camera" aria-hidden="true"></i> Capture photo</button>
            {imgSrc && (
              <img
                src={imgSrc}
              />
            )}
          </>
        );
      };
      

  return (
    <div>
      <div className="header">
        <Step steps="3" />
      </div>
      <div className="container">
        <form>
          <h3><i class="fa fa-user-circle" aria-hidden="true"></i> USER FORM</h3>
          <div>
            <label>ชื่อ</label>
            <br />
            <input
              type="text"
              placeholder="First Name"
              onChange={props.handleChange("firstname")}
              defaultValue={props.value.firstname}
            ></input>
          </div>
          <div>
            <label>นามสกุล</label>
            <br />
            <input
              type="text"
              placeholder="Last Name"
              onChange={props.handleChange("lastname")}
              defaultValue={props.value.lastname}
            ></input>
          </div>
          <div>
            <label>หมายเลขบัตรประชาชน</label>
            <br />
            <input
              type="text"
              placeholder="ID Card"
              onChange={props.handleChange("id_card")}
              defaultValue={props.value.id_card}
            ></input>
          </div>
          <div>
            <label>ที่อยู่รับซิม และ เบอร์โทรศัพท์</label>
            <br />
            <input
              type="text"
              placeholder="Address & Mobile No."
              onChange={props.handleChange("addess")}
              defaultValue={props.value.address}
            ></input>
          </div>
          <div>
            <label>
               อัพโหลดรูปถ่าย
            </label>
            <h1 className="label_red">ถือบัตรประชาชนไว้ใกล้กับใบหน้า</h1>
            {/* {<WebcamCapture /> } */}
          </div>
          <div>
            <button onClick={props.prevStep}>Back</button>
            <button onClick={props.nextStep}>Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormUser2;
