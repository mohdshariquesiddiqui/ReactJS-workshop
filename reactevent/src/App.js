import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	btnClick() {
  		alert("Button is Clicked");
  	}
  render() {
    return(
    <div>
     <p>Button to Click is here.</p>
    <button onClick={this.btnClick}>Click Me</button>
    </div>
    );
  }

}

export default App;
