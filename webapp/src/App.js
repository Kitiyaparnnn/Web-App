import React, { Component } from "react";
import './App.css';
import ChooseUser from "./components/ChooseUser";
import UserForm from "./components/UserForm";
import Admin from "./components/Admin";

function App() {
  return (
    <div className="App">
      {/* <h1>Try switch mode</h1> */}
      {/* <ChooseUser /> */}
      <UserForm />
      {/* <Admin /> */}
    </div>
  );
}

export default App;
