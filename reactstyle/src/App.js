import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
  	var myStyle = {
         fontSize: 100,
         color: '#DDEE44'
           }
 
    return (
      <div>
      	<h1 style = {myStyle}>Header</h1>
      	<p>Styles should be given as a varible in render method and that is
      	 passed as an attribute to an element as an Expression</p>
      </div>
    );
  }
}

export default App;
