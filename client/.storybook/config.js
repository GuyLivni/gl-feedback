import { configure }  from '@storybook/react';
import {injectGlobal} from 'styled-components';
import 'semantic-ui-css/semantic.min.css';

injectGlobal`
  body, html {
    font-family: benton-sans, 'Helvetica Neue', sans-serif;
    background: #f9fafb;
  }
  
  #root {
    height: 100%;
  }
`;

function loadStories() {
  require('../stories/LoginForm');
}

configure(loadStories, module);
