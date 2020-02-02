import React from 'react';
import { Link } from "react-router-dom";
import '../styles/app.scss';
import { Formik, Form as formikForm } from 'formik';
import NavBar from '../NavBar.jsx'
import {Button, TextField, Slider, Typography} from '@material-ui/core';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'lol'
    };
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <div class='container'>
      <NavBar/>
      <div className="form-container">
        <div className="col2">
        <h1>Let's give this a Chai...</h1>

        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="Name" value={this.state.value} onChange={this.handleChange}/>
        </form>
        <h3 style={{'font-weight': '400'}}>How happy are you feeling?</h3>
        <Slider
          className="slider"
          aria-label="How happy are you feeling"
          color="primary"
          defaultValue={5}
          valueLabelDisplay="auto"
          marks
          min={0}
          max={10}
          style={{'width':'50%', 'display': 'block', 'margin': '1em auto'}}
        />
        <h3 style={{'font-weight': '400'}}>How sad are you feeling?</h3>
        <Slider
          className="slider"
          aria-label="How happy are you feeling"
          color="primary"
          defaultValue={5}
          valueLabelDisplay="auto"
          marks
          min={0}
          max={10}
          style={{'width':'50%', 'display': 'block', 'margin': '1em auto'}}
        />
        <h3 style={{'font-weight': '400'}}>How nervous are you feeling?</h3>
        <Slider
          className="slider"
          aria-label="How happy are you feeling"
          color="primary"
          defaultValue={5}
          valueLabelDisplay="auto"
          marks
          min={0}
          max={10}
          style={{'width':'50%', 'display': 'block', 'margin': '1em auto'}}
        />
        <h3 style={{'font-weight': '400'}}>How emotional are you feeling?</h3>
        <Slider
          className="slider"
          aria-label="How happy are you feeling"
          color="primary"
          defaultValue={5}
          valueLabelDisplay="auto"
          marks
          min={0}
          max={10}
          style={{'width':'50%', 'display': 'block', 'margin': '1em auto'}}
        />
              <Link to="/Results">
                <Button variant="contained" color="primary" style={{'padding': '20px', 'margin-top': '2em', 'font-family': 'Kalam', 'font-size':'1em'}}>
                  Click here to continue.
                </Button>
              </Link>
        </div>
        </div>
      </div>
    )
  }
}

export default Form;
