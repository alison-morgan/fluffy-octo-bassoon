import React, { Component } from 'react';
import './App.css';
import HomePage from './homePage.js';

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
      .then( (res) => {
        let a = res.json()
        return a
      })
      .then(res => console.log('response ', res))
  }

//   componentDidMount() {
//   fetch('/api')
//     .then(response => {
//       console.log(response)
//       if (!response.ok) {
//         throw new Error(`status ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(json => {
//       this.setState({
//         message: json.message,
//         fetching: false
//       });
//     }).catch(e => {
//       this.setState({
//         message: `API call failed: ${e}`,
//         fetching: false
//       });
//     })
// }

  render() {
    return (
      <div className="App">
        <HomePage />

      </div>
    );
  }
}

export default App;
