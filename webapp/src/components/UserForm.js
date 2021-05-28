import React, { Component } from "react";

export class UserForm extends Component {
  state = {
    step: 1,
    firstname: "",
    lastname: "",
    id_card: "",
    phone_num: Number,
    picture: false,
    // simCard: 
    // {time: Number,
    // speed:Number
    // }

  };
  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //Proceed to prev step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //Handle field change
  handleChange = input => e => {
      this.setState({[input]: e.target.value})
  }

  render() {
      const {step} = this.state;
      const {firstname,lastname,id_card,phone_num,picture} = this.state
    return <div></div>;
  }
}

export default UserForm;
