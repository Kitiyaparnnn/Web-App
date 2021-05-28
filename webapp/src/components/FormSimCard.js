import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './FormSimCard.css'

export class FormSimCard extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        {/* <h1>Sim Card Form</h1> */}
        <MuiThemeProvider>
          <React.Fragment>
            <AppBar className='appbar' color="secondary">
              <Typography >true</Typography>
            </AppBar>
            <br />
            <br />
            <TextField
            hintText="What kind of sim card do you want?"
            floatingLabelText="Using for"
            onChange={handleChange('simFor')}
            defaultValue={value.simFor}>Using for</TextField>
            <br/>
            <Button
            variant="contained"
            color="secondary"
            primary={true}
            onClick={this.continue}
            >Continue</Button>
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default FormSimCard;
