import React from 'react';
import configureStore from "../../store/configureStore";
import { Provider } from 'react-redux';
import { initializeApp } from '../../actions';
import HomePage from '../pages/HomePage';
import ErrorBoundary from '../pages/ErrorBoundaryPage';
import GlobalStyle from './App.style';

const store = configureStore();
store.dispatch(initializeApp());

const App = () => (
  <ErrorBoundary>
    <GlobalStyle />
    <Provider store={store}>
      <HomePage />
    </Provider>
  </ErrorBoundary>
);

export default App;
