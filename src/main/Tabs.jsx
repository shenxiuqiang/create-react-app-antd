import React, { Component } from 'react';
import { Button } from 'antd';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <Button type="primary">Button</Button>
    );
  }
}

export default App;
