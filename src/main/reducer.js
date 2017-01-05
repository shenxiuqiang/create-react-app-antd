import { menus } from './menus';

const CURRENT_MENU = 'CURRENT_MENU';
const CURRENT_TAB = 'CURRENT_TAB';
const TAB_REMOVE = 'TAB_REMOVE';

export const dispatchCurrentMenu = data => ({
  type: CURRENT_MENU,
  data,
});
export const dispatchCurrentTab = data => ({
  type: CURRENT_TAB,
  data,
});
export const dispatchCurrentRemove = data => ({
  type: TAB_REMOVE,
  data,
});


export default function reduceList(state = {
  currentMenu: 'index',
  currentTab: 'index',
  panes: [{ title: '首页', component: require('../index/index').default, key: 'index' }],
}, action) {
  switch (action.type) {
    case CURRENT_MENU: {
      if (state.panes.filter(data => data.key === action.data).length === 0) {
        state.panes = state.panes.concat(menus.filter(data => data.key === action.data));
      }
      return { ...state,
        currentMenu: action.data,
        currentTab: action.data,
      };
    }
    case CURRENT_TAB: {
      return { ...state,
        currentTab: action.data,
      };
    }
    case TAB_REMOVE: {
      state.panes = state.panes.filter(data => data.key !== action.data);
      return { ...state,
      };
    }
    default:
      return state;
  }
}
