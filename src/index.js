import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Root from './components/root';
import reducers from './reducers';
import styles from '../styles/style.css'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(reducers,applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter><Provider store={store}>
    <Root />
  </Provider></BrowserRouter>
  , document.querySelector('.container'));
