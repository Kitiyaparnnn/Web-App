import React, { Component, useState } from "react";
import "./ChooseUser.css";
import UserForm from "./UserForm";
import Admin from "./Admin";
import { Link } from "@material-ui/core";

function ChooseUser() {

  //เชื่อมปุ่มกับหน้า user , admin
  return (
    <div className="chooseUser">
      <img src="https://www.contactcenterworld.com/images/company/Truemove-1200px-logo.jpg"></img>
      <br />
       <button className="button_user" onClick=''>
        สมัครรับบริการ
      </button>
      <br />
      <button className="button_admin" onClick=''>
        แอดมิน
      </button>
    </div>
  );
}

export default ChooseUser;
