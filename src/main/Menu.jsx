import React from 'react';
import { Menu } from 'antd';
import { menus } from './menus';

const MainMenu = props =>
  <Menu
    onClick={e => props.onClick(e.key)}
    selectedKeys={[props.current]}
    mode="horizontal"
  >
    {menus.map(data => <Menu.Item key={data.key}>{data.title}</Menu.Item>)}
  </Menu>;

MainMenu.propTypes = {
  current: React.PropTypes.string,
};

export default MainMenu;
