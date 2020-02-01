import React from 'react';
import main from '../assets/main-tea.png';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import '../styles/app.scss';


class Home extends React.Component {
  render() {
    return (
      <body>
      <div class='container'>
        <div id='content'>
          <div><img src={logo} className="logo" alt="logo"/></div>
          <div id="Logo">
                    <Link to="/Form">
                          <img src={main} className="landing-img" alt=""/>
                    </Link>
                </div>
        </div>
      </div>
      </body>
    )
  }
}

export default Home;
