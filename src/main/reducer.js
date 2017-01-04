import { combineReducers } from 'redux';

const CURRENT = 'CURRENT';

export function dispatchCurrent(data) {
  return {
    type: CURRENT,
    data,
  };
}

function reduceList(state = { current: 'storeList' }, action) {
  switch (action.type) {
    case CURRENT:
      return { ...state,
        current: action.data,
      };
    default:
      return state;
  }
}
export default combineReducers({
  reduceList,
});
export function reduceData(state) {
  return state.reduceList;
}
