import React, { Component } from "react";
import './ChooseUser.css'

export class ChooseUser extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <div className='chooseUser'>
        <img src="https://www.contactcenterworld.com/images/company/Truemove-1200px-logo.jpg"></img>
        <button className='button_user' onClick={this.continue}>ซื้อซิมทรู</button>
      </div>
    );
  }
}

export default ChooseUser;
