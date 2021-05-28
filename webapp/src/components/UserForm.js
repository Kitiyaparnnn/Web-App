import React, { Component } from "react";
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
    simFor:'',
    simTime:'',
    simSpeed:'',
    firstname: "",
    lastname: "",
    id_card: "",
    phone_num:'',
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
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
    console.log(this.state);
  };

  render() {
    const { step } = this.state;
    const { simFor,simTime,simSpeed, firstname, lastname, id_card, phone_num, picture } =
      this.state;
    const value = { simFor,simTime,simSpeed, firstname, lastname, id_card, phone_num, picture };
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
        // return <h1>FormPersonalDetails</h1>;
        return(
            <FormUser
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            value={value}
          />
        )
      case 3:
        return <h1>Confirm</h1>;
    }
  }
}

export default UserForm;
