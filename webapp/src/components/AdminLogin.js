import React, { useState } from "react";
import "./AdminLogin.css";
import AdminConfirm from "./AdminConfirm";

function Admin() {
  const password = "123456";
  const [loginPass, setLoginPass] = useState("");
  const [pass,setPass] = useState(false)

  return (
    <div className="container">
      <h3>Are you admin??</h3>
      <p>Please enter the password</p>
      <input
        placeholder="Enter Admin Password"
        type="password"
        onChange={(e) => {
          setLoginPass(e.target.value);
        }}
      ></input>
      <button
        type="submit"
        onClick={(e) => {
          if (password === loginPass) {
            setPass(true)
            return alert("Login success");
          } else return alert("You are not the admin ;-;");
        }}
      >
        Submit
      </button>
      {pass && <AdminConfirm />}
    </div>
  );
}

export default Admin;
