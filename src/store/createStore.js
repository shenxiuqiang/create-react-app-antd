import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { default as allReducers } from './combineReducers';

export default function configureStore(initialState = {}) {
  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)(createStore)(allReducers, initialState);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default;
      store.replaceReducer(reducers(store.asyncReducers));
    });
  }

  return store;
}
