import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import Typography from '@material-ui/core/Typography';

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
        <h1 id="welcome">Welcome to the World of Coffee! (basically the same as any other world just with coffee.)</h1>
        <div className="earth"></div>
        <Button variant="contained" color="beige">
          Enter Coffee World!
        </Button>
      </div>
    );
  }
}

export default App;
