import React                     from 'react';
import {Provider}                from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import configureStore            from '../src/store';

const store = configureStore();

export function ReduxProvider({ story }) {
  return (
    <Provider store={store}>
      <Router>
        {story}
      </Router>
    </Provider>
  );
}