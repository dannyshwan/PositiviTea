import React from 'react';
import { Link } from "react-router-dom";
import '../styles/app.scss';
import tea1 from '../assets/tea1.png';
import tea2 from '../assets/tea2.png';
import tea3 from '../assets/tea3.png';
import tea4 from '../assets/tea4.png';

const ENDPOINT = "https://type.fit/api/quotes";
const TEAS = [
  {
    name: "Tea 1",
    image: tea1,
    fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula ultrices tincidunt. Cras cursus nulla suscipit erat porta, sed interdum nisi egestas. Etiam at mollis turpis, at volutpat nulla. Vestibulum varius ac massa vitae sollicitudin. Nam vulputate congue commodo. Vivamus bibendum justo nec orci sollicitudin vehicula. Morbi et commodo velit. Nunc iaculis metus pellentesque, finibus nisi at, iaculis nisl. Quisque ac vestibulum metus, at bibendum augue. Nulla lacinia convallis magna id tempus. Nulla ac eros mi. Quisque mi felis, feugiat sit amet mi eu, euismod consequat mi. "
  },
  {
    name: "Tea 2",
    image: tea2,
    fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula ultrices tincidunt. Cras cursus nulla suscipit erat porta, sed interdum nisi egestas. Etiam at mollis turpis, at volutpat nulla. Vestibulum varius ac massa vitae sollicitudin. Nam vulputate congue commodo. Vivamus bibendum justo nec orci sollicitudin vehicula. Morbi et commodo velit. Nunc iaculis metus pellentesque, finibus nisi at, iaculis nisl. Quisque ac vestibulum metus, at bibendum augue. Nulla lacinia convallis magna id tempus. Nulla ac eros mi. Quisque mi felis, feugiat sit amet mi eu, euismod consequat mi. "
  },
  {
    name: "Tea 3",
    image: tea3,
    fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula ultrices tincidunt. Cras cursus nulla suscipit erat porta, sed interdum nisi egestas. Etiam at mollis turpis, at volutpat nulla. Vestibulum varius ac massa vitae sollicitudin. Nam vulputate congue commodo. Vivamus bibendum justo nec orci sollicitudin vehicula. Morbi et commodo velit. Nunc iaculis metus pellentesque, finibus nisi at, iaculis nisl. Quisque ac vestibulum metus, at bibendum augue. Nulla lacinia convallis magna id tempus. Nulla ac eros mi. Quisque mi felis, feugiat sit amet mi eu, euismod consequat mi. "
  },
  {
    name: "Tea 4",
    image: tea4,
    fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula ultrices tincidunt. Cras cursus nulla suscipit erat porta, sed interdum nisi egestas. Etiam at mollis turpis, at volutpat nulla. Vestibulum varius ac massa vitae sollicitudin. Nam vulputate congue commodo. Vivamus bibendum justo nec orci sollicitudin vehicula. Morbi et commodo velit. Nunc iaculis metus pellentesque, finibus nisi at, iaculis nisl. Quisque ac vestibulum metus, at bibendum augue. Nulla lacinia convallis magna id tempus. Nulla ac eros mi. Quisque mi felis, feugiat sit amet mi eu, euismod consequat mi. "
  }
];

class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: []
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
      <body>
      <div class='container'>
        <div id='content'>
          <h2> Hello{this.props.name ? `, ${this.props.name}.` : `.`} Your tea is...</h2>
          <h1>{TEAS[random_tea].name}</h1>
          <div id="Logo" class="result">
              <Link to="/" className="result-tea">
                    <img src={TEAS[random_tea].image} alt=""/>
              </Link>
              <div class="tea-description"><p>{TEAS[random_tea].fact}</p></div>
          </div>
          <div>
            <h2>
              {quotes ? quotes[Math.floor(Math.random()*quotes.length)] : ""}
            </h2>
          </div>
        </div>
      </div>
    </body>
    )
  }

  generate
}

export default Results;
