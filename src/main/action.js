import { dispatchCurrent } from './reducer';

function dispatchList(data) {
  return {
    type: 'LIST',
    data,
  };
}


export function fetchList() {
  return (dispatch) => {
    dispatch(dispatchList(1));
  };
}

export function onMenuClick(data) {
  return (dispatch) => {
    dispatch(dispatchCurrent(data));
  };
}
