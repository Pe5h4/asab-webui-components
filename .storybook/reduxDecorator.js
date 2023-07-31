import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const ReduxService = new ReduxService(this, "ReduxService");
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let Store = createStore(combineReducers(ReduxService.Reducers), composeEnhancers(applyMiddleware()));

const ReduxDecorator = (Story) => (
  <Provider store={Store}>
    <Story />
  </Provider>
);

export default ReduxDecorator;
