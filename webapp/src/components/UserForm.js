import React, { Component } from "react";
import Confirm from "./Confirm";
import ConfirmPackage from "./ConfirmPackage";
import FormSimCard from "./FormSimCard";
import FormUser from "./FormUser";

export class UserForm extends Component {
  state = {
    step: 1,
    // simcard: [
    //   {
    //     id: 1,
    //     using: "",
    //     timesn: "",
    //     timedn: "",
    //     speed: "",
    //     firstname: "",
    //     lastname: "",
    //     id_card: "",
    //     address: "",
    //     picture: null,
    //   },
    // ],
    simFor: "",
    simTimeSN: "",
    simTimeDN: "",
    simSpeed: "",
    firstname: "",
    lastname: "",
    id_card: "",
    address: "",
    picture: null,
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
    if (e !== "picture") {
      this.setState({ [input]: e.target.value });
    } else {
      this.setState({ [input]: e.target.files[0] });
    }
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
      address,
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
      address,
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
          <ConfirmPackage
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            value={value}
          />
        );
      case 3:
        return (
          <FormUser
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            value={value}
          />
        );
      case 4:
        return <Confirm prevStep={this.prevStep} value={value} />;
    }
  }
}

export default UserForm;
