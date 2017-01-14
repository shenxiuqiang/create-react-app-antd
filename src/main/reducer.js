import {
  createAction,
} from 'redux-actions';

import menus from './menus';

const CURRENT_MENU = 'CURRENT_MENU';
const CURRENT_TAB = 'CURRENT_TAB';
const TAB_REMOVE = 'TAB_REMOVE';

export const dispatchCurrentMenu = createAction(CURRENT_MENU);
export const dispatchCurrentTab = createAction(CURRENT_TAB);
export const dispatchCurrentRemove = createAction(TAB_REMOVE);

export default (state = {
  currentMenu: 'index',
  currentTab: 'index',
  panes: [{
    title: '首页',
    component: require('../index/index').default,
    key: 'index',
  }],
}, action) => {
  switch (action.type) {
    case CURRENT_MENU:
      {
        const targetKey = action.payload;
        let {
          panes,
        } = state;
        if (panes.filter(data => data.key === targetKey).length === 0) {
          panes = panes.concat(menus.filter(data => data.key === targetKey));
        }
        return { ...state,
          currentMenu: targetKey,
          currentTab: targetKey,
          panes,
        };
      }
    case CURRENT_TAB:
      {
        return { ...state,
          currentTab: action.payload,
        };
      }
    case TAB_REMOVE:
      {
        const targetKey = action.payload;
        let {
          currentTab,
          panes,
        } = state;
        let lastIndex;
        panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        panes = panes.filter(data => data.key !== targetKey);
        if (lastIndex >= 0 && currentTab === targetKey) {
          currentTab = panes[lastIndex].key;
        }
        return { ...state,
          panes,
          currentTab,
        };
      }
    default:
      return state;
  }
};
