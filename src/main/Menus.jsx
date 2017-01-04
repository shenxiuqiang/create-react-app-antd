import React, { Component } from 'react';
import { Menu } from 'antd';
import { menus } from './menus';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
    };
  }

  handleClick = (e) => {
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
        {menus.map(data => <Menu.Item key={data.key}>{data.title}</Menu.Item>)}
      </Menu>
    );
  }
}

export default App;
