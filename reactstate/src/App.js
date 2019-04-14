import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			count: 0
			};
	}

	btnClick(){
		this.setState({
			count: this.state.count + 1
		});

	}

  render() {
    return (
      <div>
      	<h1>Value : {this.state.count}</h1>
      	<br />
      	<button onClick = {this.btnClick.bind(this)}>Increment Me!!</button>
      </div>
    );
  }
}

export default App;
