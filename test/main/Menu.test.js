import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Menu from '../../src/main/Menu';

describe('<MainMenu />', () => {
  const wrapper = mount(<Menu
    current={'index'}
    onClick={() => { console.log(1); console.log(1); }}
  />);
  it('<MainMenu />渲染与参数', () => {
    expect(wrapper.props().current).to.equal('index');
  });
});
