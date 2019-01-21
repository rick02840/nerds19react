import React, { Component } from 'react';
import logo from './lil-nerdy.png';

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

export default Nerdy;