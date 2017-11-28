import React            from 'react';
import { render }       from 'react-dom';
import Root             from './components/Root';
import configureStore   from './store';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);