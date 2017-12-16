import React, { Component } from 'react';
import {injectGlobal} from 'styled-components';
import 'semantic-ui-css/semantic.min.css';

injectGlobal`
  body, html {
    font-family: benton-sans, 'Helvetica Neue', sans-serif;
  }
  
  pre {
    overflow: auto !important;
  }
  
  #root {
    height: 100%;
  }
`;

export default class Container extends Component {
  render() {
    const { story } = this.props;

    return (
      <div
        style={{
          padding: '0 2em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        {story()}
      </div>
    );
  }
}