import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {word: "Hello"}
  }
  
  render() { 
    return (
      <div className="App">
        <h1>{this.state.word}</h1>
        <p>Noob Developer #1</p>
        <button onClick={this.changeName}>Click</button>
      </div>
    );
  }

  changeName() {
    this.state.word === "Hello" ? this.setState({word: "Goodbye"}) : this.setState({word: "Hello"}); 
  }
}

export default App;
