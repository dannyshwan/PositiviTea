import React from 'react';
import main from '../assets/main-tea.png';
import { Link } from "react-router-dom";
import '../styles/app.scss';


class Results extends React.Component {
  render() {
    return (
      <body>
      <div class='container'>
        <div id='content'>
          <h1>results</h1>
          <div id="Logo">
              <Link to="/">
                    <img src={main} className="landing-img" alt=""/>
              </Link>
          </div>
        </div>
      </div>
    </body>
    )
  }
}

export default Results;
