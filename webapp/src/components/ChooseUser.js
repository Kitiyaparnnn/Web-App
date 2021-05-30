import React, { Component, useState } from "react";
import "./ChooseUser.css";
import UserForm from "./UserForm";
import Admin from "./Admin";
import { Link } from "@material-ui/core";

function ChooseUser() {
  const [click,setClick] = useState(false);
  const [click2,setClick2] = useState(false)
  //เชื่อมปุ่มกับหน้า user , admin
  return (
    <div className="chooseUser">
      <img src="https://www.contactcenterworld.com/images/company/Truemove-1200px-logo.jpg"></img>
      <br />
      {click && <UserForm />}
      {click2 && <Admin />}
       <button className="button_user" onClick={() => setClick(true)}>
        สมัครรับบริการ
      </button> 
      <a href={`/components/UserForm`}>User</a>
      <br />
      <button className="button_admin" onClick={() => setClick2(true)}>
        แอดมิน
      </button>
    </div>
  );
}

export default ChooseUser;
