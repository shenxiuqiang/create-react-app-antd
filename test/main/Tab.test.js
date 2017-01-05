import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Tab from '../../src/main/Tab';

describe('<MainTab />', () => {
  const wrapper = mount(<Tab
    current={'index'}
    onClick={() => { console.log(1); console.log(1); }}
  />);
  it('<MainTab />渲染与参数', () => {
    expect(wrapper.props().current).to.equal('index');
  });
});
