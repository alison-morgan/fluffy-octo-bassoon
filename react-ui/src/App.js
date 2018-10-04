import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: "HELLO",
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to the World of Coffee! (basically the same as any other world just with coffee.)</h1>
        <img id="spinningEarth" src="../imgs/earthMap.jpg" alt="spinning shit" />
        <a href="#" ><h3 id="enterCoffeeWorld">Click the world to enter.</h3></a>
      </div>
    );
  }
}

export default App;
