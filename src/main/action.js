import {
  dispatchCurrentMenu,
  dispatchCurrentTab,
  dispatchCurrentRemove,
} from './reducer';


export function onMenuClick(data) {
  return (dispatch) => {
    dispatch(dispatchCurrentMenu(data));
  };
}

export function onTabChange(data) {
  return (dispatch) => {
    dispatch(dispatchCurrentTab(data));
  };
}

export function onTabEdit(targetKey, action) {
  return (dispatch) => {
    if (targetKey !== 'index' && action === 'remove') {
      dispatch(dispatchCurrentRemove(targetKey));
    }
  };
}
