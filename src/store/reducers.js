import { combineReducers } from 'redux';
import { default as indexReducer } from '../index/indexReducer';
import { default as mainReducer } from '../main/reducer';
import { default as storeManageReducer } from '../storeManage/reducer';

export default combineReducers({
  indexReducer,
  mainReducer,
  storeManageReducer,
});
