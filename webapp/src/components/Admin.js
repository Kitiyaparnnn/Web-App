import React, { Component, useState } from "react";
import AdminConfirm from "./AdminConfirm";

export class Admin extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Admin page</h3>
        <input placeholder="Enter Admin Password" type="password"></input>
        <button
          type="submit"
          onClick={(e) => {
            return alert("You are not the admin ;-;");
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Admin;
