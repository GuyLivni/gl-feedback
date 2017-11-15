import 'semantic-ui-css/semantic.min.css';
import "./index.css";
import React                            from 'react';
import { render }                       from 'react-dom';
import { Provider }                     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);