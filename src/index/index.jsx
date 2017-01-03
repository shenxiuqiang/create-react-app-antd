import React, { Component } from 'react';
import { Button } from 'antd';
import './index.css';

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
        123
      </div>
    );
  }
}

export default App;
