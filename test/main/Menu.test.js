import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import MainMenu from '../../src/main/Menu';
import menus from '../../src/main/menus';

describe('<MainMenu />', () => {
  const onButtonClick = sinon.spy();
  const component = mount(
    <MainMenu
      current={'index'}
      onClick={onButtonClick}
    />,
    );
  it('<MainMenu />菜单数量与menus验证', () => {
    expect(component.find('.ant-menu-item')).to.have.length(menus.length);
  });
  it('<MainMenu />默认选择index', () => {
    expect(component.props().current).to.equal('index');
  });
  it('<MainMenu />模拟点击', () => {
    let i = 0;
    component.find('.ant-menu-item').forEach((node) => {
      node.simulate('click');
      i += 1;
      expect(onButtonClick).to.have.property('callCount', i);
    });
  });
});
