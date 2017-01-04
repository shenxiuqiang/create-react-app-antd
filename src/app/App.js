import React from 'react';
import { Provider } from 'react-redux';
import { default as configureStore } from '../store/createStore';
import Main from '../main/MainContainer';

const store = configureStore();

const App = () => <Provider store={store}>
  <Main />
</Provider>;

export default App;
