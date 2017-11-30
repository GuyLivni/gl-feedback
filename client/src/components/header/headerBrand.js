import React         from 'react';
import styled        from 'styled-components';
import {Header}      from 'semantic-ui-react';

const Brand = styled.div`
    flex: 1 1 0%;
    width: auto;
    text-align: center;
    margin: 0;
    color: #000;
`;

const HeaderBrand = () => (
  <Brand>
    <Header size="huge" content="Feedback" />
  </Brand>
);

export default HeaderBrand;