import React, { Component } from 'react';
import Hits from './Components/Items';
import './App.css';

class App extends Component {
  render() {
    return (
      <Hits hits={this.state.hits} /> 
    )
  }
  state = {
    hits: []
  }

  componentDidMount() {
    fetch("https://nutritionix-api.p.rapidapi.com/v1_1/search/cheddar%2520cheese?fields=item_name%252Citem_id%252Cbrand_name%252Cnf_calories%252Cnf_total_fat", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "nutritionix-api.p.rapidapi.com",
        "x-rapidapi-key": "95c1ce326amsha7d94f43d9d2f13p1bd6cajsn96439d6126af"
      }
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      this.setState({ hits: data.hits })
    })
    .catch(console.log)
  }

}

export default App;