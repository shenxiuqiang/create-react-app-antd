import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
    };
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />Navigation One
        </Menu.Item>
      </Menu>
    );
  }
}

export default App;
