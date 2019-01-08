import React, { Component } from 'react';
import logo from './lil-nerdy.png';
import './App.css';

class App extends Component {

  // this is where the App state is stored
  state = {
    spin: true,
    nerdy: "spin"
  }

  // this is called an arrow function
  setspin = () => {
    this.setState({
    spin: !this.state.spin,
    })
    if(this.state.nerdy == "spin"){
      this.setState({
        nerdy: "no-spin",
      })
    } else {
      this.setState({
        nerdy: "spin",
      })
    }
  }

  // remder is a required part of a component, this is JSX (html within Javascript)
  render() {
    return (
      <div className="App">
          <header className="App-header">
          <Nerdy spinstate = {this.state.spin} nerdyclass = {this.state.nerdy}  />
          <button onClick={this.setspin}>Spin Control</button>
          <p className="notice">This was built starting with <span className="green">github.com/facebook/create-react-app</span>.</p>
        </header>
      </div>
    );
  }
}

// this is a new component called Nerdy
class Nerdy extends Component {
  render() {
    return (
      <div className="Nerdy">
      <img src={logo} id="App-logo" className={this.props.nerdyclass} alt="logo" />
      { this.props.spinstate &&
      <p>Lil' Nerdy is spinning.</p>
      }
      { !this.props.spinstate &&
        <p>Lil' Nerdy no spin.</p>
      }
      </div>
    );
  }
}

export default App;
