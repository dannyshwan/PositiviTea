import React from 'react';
import main from '../assets/main-tea.png';
import logo from '../assets/logo-straight.png';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import '../styles/app.scss';


class Home extends React.Component {
  render() {
    return (
      <body>
      <div class='container'>
        <div id='content'>
            <div className="col1">
              <img src={logo} className="logo" alt="logo"/>
              <h2>Are you ready to enter a positivity space?</h2>
              <Link to="/Form">
                <Button variant="contained" color="primary" style={{'padding': '20px', 'margin-top': '2em', 'font-family': 'Kalam', 'font-size':'1em'}}>
                  Click here to begin.
                </Button>
              </Link>
            </div>
            <div className="col2">
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
