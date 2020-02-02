import React from 'react';
import { Link } from "react-router-dom";
import '../styles/app.scss';
import { Formik, Form as formikForm } from 'formik';
import NavBar from '../NavBar.jsx'


class Form extends React.Component {
  render() {
    return (
      <div class='container'>
      <NavBar/>
        <h1>Let's give this a Chai...</h1>
        <Formik
          initialValues={{
            firstName: '', 
            lastName: '',
            feeling: ''
          }}
        >
          {() => (
          <formikForm>
            <label htmlFor='name' style={{display: 'block'}}>What is your name?</label>
            <input
              id="name"
              placeholder="Please enter your name"
              type="text"
              >
            </input>
            <label htmlFor='feeling' style={{display: 'block'}}>How are you feeling?</label>
            <select
              id="name"
              placeholder="How are you feeling?"
            >
              <option value="excited">Excited</option>
              <option value="stressed">Stressed</option>
              <option value="emotional">Emotional</option>
              <option value="an">Audi</option>
            </select>
            <label htmlFor='color' style={{display: 'block'}}>What's your favorite color?</label>
            <input 
              type='color'
              placeholder="#000000"
            >
            </input>
            <Link to="/Results">
              <button type='submit'> Next </button>
            </Link>
          </formikForm>
          )}
        </Formik>
      </div>
    )
  }
}

export default Form;
