import React from 'react';
import { Link } from "react-router-dom";
import '../styles/app.scss';
import tea1 from '../assets/tea1.png';
import tea2 from '../assets/tea2.png';
import tea3 from '../assets/tea3.png';
import tea4 from '../assets/tea4.png';
import NavBar from '../NavBar';
import {Button} from '@material-ui/core';

const ENDPOINT = "https://type.fit/api/quotes";
const TEAS = [
  {
    name: "Earl Grey Tea",
    image: tea1,
    fact: "Earl Grey tea is a black tea containing bergamot oil, typically considered an English tea. The bergamot in Earl Grey tea has been known to have a calming effect on people, as well as to boost a person’s mood."
  },
  {
    name: "Green Tea",
    image: tea2,
    fact: "Originally from Asia, green tea is a light tasting tea known for it's various health benefits, including helping with weight loss, reducing risk of cardiovascular disease and more."
  },
  {
    name: "Milk Tea",
    image: tea3,
    fact: "Various forms of milk tea exist around the work. Milk tea is often sweetened, especially with the recent popularity of bubble tea. Feeling a bit down? Have some milk tea as a treat!"
  },
  {
    name: "Jasmine Tea",
    image: tea4,
    fact: "Jasmine tea is a common dim sum tea. It is filled with anti-oxidants, promoting brain health and a plethora of other health benefits."
  }
];

class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      user:""
    };
  }
  
  componentDidMount(){
    fetch(ENDPOINT).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({ quotes: data.map(quote => quote.text) });
    });
  }

  render() {

    const { quotes } = this.state;
    let random_tea = Math.floor(Math.random()*TEAS.length);

    return (

      <div class='container'>
        <NavBar/>
        <div id='content'>
          <div className="result-container">
            <h3> Hello{this.state.user ? `, ${this.state.user}.` : `.`} Your tea is...</h3>
            <h1>{TEAS[random_tea].name}</h1>
            <div id="Logo" class="result">
                <Link to="/" className="result-tea">
                      <img src={TEAS[random_tea].image} alt="" style={{"width": '90%'}}/>
                </Link>
                <div class="tea-description"><p>{TEAS[random_tea].fact}</p></div>
            </div>
            <div>
              <h3>
                {quotes ? quotes[Math.floor(Math.random()*quotes.length)] : ""}
              </h3>
            </div>
            <Link to="/">
                <Button variant="contained" color="primary" style={{'padding': '15px', 'font-family': 'Kalam', 'font-size':'1em'}}>
                  Return home.
                </Button>
              </Link>
          </div>
        </div>
      </div>
    
    )
  }

  generate
}

export default Results;
