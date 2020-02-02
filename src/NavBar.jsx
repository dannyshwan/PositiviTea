import React from 'react';
import main from '../src/assets/main-tea.png';
import { Link } from "react-router-dom";
import '../src/styles/app.scss';

export class NavBar extends React.Component{
  render(){
    return(
      <div className="navbar">
       <Link to="/">
          <img src={main} className="nav" alt=""/>
        </Link>
      </div>
    );
  }
}

export default NavBar;
