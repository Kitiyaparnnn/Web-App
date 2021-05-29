import React, { Component } from "react";
import Confirm from "./Confirm";
import FormSimCard from "./FormSimCard";
import FormUser from "./FormUser";

export class UserForm extends Component {
  state = {
    step: 1,
    // simcard: [
    //   {
    //     time: "",
    //     speed: "",
    //   },
    // ],
    simFor: "",
    simTimeSN: "",
    simTimeDN: "",
    simSpeed: "",
    firstname: "",
    lastname: "",
    id_card: "",
    phone_num: "",
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
    console.log(this.state);
  };

  //Proceed to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
    console.log(this.state);
  };

  //Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      simFor,
      simTimeSN,
      simTimeDN,
      simSpeed,
      firstname,
      lastname,
      id_card,
      phone_num,
      picture,
    } = this.state;
    const value = {
      simFor,
      simTimeSN,
      simTimeDN,
      simSpeed,
      firstname,
      lastname,
      id_card,
      phone_num,
      picture,
    };
    switch (step) {
      case 1:
        return (
          <FormSimCard
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            value={value}
          />
        );
      case 2:
        return (
          <FormUser
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            value={value}
          />
        );
      case 3:
        return <Confirm prevStep={this.prevStep} value={value} />;
    }
  }
}

export default UserForm;
