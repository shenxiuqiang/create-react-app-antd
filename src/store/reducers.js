import { combineReducers } from 'redux';
import { default as indexReducer } from '../index/indexReducer';
import { default as mainReducer } from '../main/reducer';

export default combineReducers({
  indexReducer,
  mainReducer,
});
