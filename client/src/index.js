import 'semantic-ui-css/semantic.min.css';
import './index.css';
import React                            from 'react';
import { render }                       from 'react-dom';
import { Provider }                     from 'react-redux';
import { BrowserRouter as Router }      from 'react-router-dom';
import App                              from './components/App';
import configureStore                   from './store';

const store = configureStore({});

const RootHTML = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

render(<RootHTML />, document.getElementById('root'));