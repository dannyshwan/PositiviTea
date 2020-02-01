import React from 'react';
import '../styles/app.scss';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from '../views/Home.jsx'
import Form from '../views/Form.jsx'
import Results from '../views/Results.jsx'

export class App extends React.Component{
  render(){
    return(
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/Form" component={Form} />
        <Route path="/Results" component={Results} />
      </Router>
    );
  }
}