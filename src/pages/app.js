import React from 'react';
import '../styles/app.scss';
import main from '../assets/main-tea.png';
import logo from '../assets/logo.png';

export class App extends React.Component{
  render(){
    return(
      <body>
        <div class='container'>
          <div id='content'>
            <h1><img src={logo} className="logo" alt="logo"/></h1>
            <img src={main} className="landing-img" alt="main-tea"/>
          </div>
        </div>
      </body>
    );
  }
}