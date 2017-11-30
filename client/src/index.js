import React            from 'react';
import { render }       from 'react-dom';
import { injectGlobal } from 'styled-components';
import Root             from './components/Root';
import configureStore   from './store';
import 'semantic-ui-css/semantic.min.css';

injectGlobal`
  body, html {
    background: #f9fafb;
  }
  
  #root {
    height: 100%;
  }
`;

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);