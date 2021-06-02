import React, { useState} from "react";
import './App.css';
import UserForm from "./components/UserForm";
import AdminLogin from "./components/AdminLogin"


function App() {
  return (
    <div className="App">
      {/* <h1>Try switch mode</h1> */}
      <UserForm />
      {/* <AdminLogin /> */}
    </div>
  );
}

export default App;
