import React from 'react';
import { Menu } from 'antd';
import { menus } from './menus';

const MainMenu = ({ onClick, current }) =>
  <Menu
    onClick={e => onClick(e.key)}
    selectedKeys={[current]}
    mode="horizontal"
  >
    {menus.map(data => <Menu.Item key={data.key}>{data.title}</Menu.Item>)}
  </Menu>;

MainMenu.propTypes = {
  current: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default MainMenu;
