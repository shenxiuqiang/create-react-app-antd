import { expect } from 'chai';
import { createStore } from 'redux';

import { default as mainReducer, dispatchCurrentMenu, dispatchCurrentTab } from '../../src/main/reducer';

describe('reducer', () => {
  it('reducer 创建', () => {
    const store = createStore(mainReducer);
    const methods = Object.keys(store);

    expect(methods.length).to.equal(4);
    expect(methods).to.contain('subscribe');
    expect(methods).to.contain('dispatch');
    expect(methods).to.contain('getState');
    expect(methods).to.contain('replaceReducer');
  });

  it('throws if reducer is not a function', () => {
    expect(() =>
      createStore(),
    ).to.throw();

    expect(() =>
      createStore('test'),
    ).to.throw();

    expect(() =>
      createStore({}),
    ).to.throw();

    expect(() =>
      createStore(() => {}),
    ).not.to.throw();
  });

  it('reducer 更改选中菜单', () => {
    const store = createStore(mainReducer);
    expect(store.getState().currentMenu).to.equal('index');
    const newCurrentMenu = 'storeManage';
    store.dispatch(dispatchCurrentMenu(newCurrentMenu));
    expect(store.getState().currentMenu).to.equal(newCurrentMenu);
  });

  it('reducer 更改选中标签页', () => {
    const store = createStore(mainReducer);
    expect(store.getState().currentTab).to.equal('index');
    const newCurrentTab = 'orderManage';
    store.dispatch(dispatchCurrentTab(newCurrentTab));
    expect(store.getState().currentTab).to.equal(newCurrentTab);
  });
});
