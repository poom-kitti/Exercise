import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {word: "Hello"}
  }
  
  render() { 
    return (
      <div className="App" onClick={this.changeName}>
        <h1>{this.state.word}</h1>
        <p className="detail">Noob Developer #1</p>
      </div>
    );
  }

  changeName = () => {
    this.state.word === "Hello" ? this.setState({word: "Pattarapon Kittisrisawai"}) : this.setState({word: "Hello"}); 
  }
}

export default App;
