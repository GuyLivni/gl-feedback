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
          position: "fixed",
          top: "0px",
          left: "0px",
          bottom: "0px",
          right: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "auto"
        }}>
        {story()}
      </div>
    );
  }
}