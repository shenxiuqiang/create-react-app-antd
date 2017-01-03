import { combineReducers } from 'redux';


function reduceList(state = {}, action) {
  switch (action.type) {
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
