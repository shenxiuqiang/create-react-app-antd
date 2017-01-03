import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
