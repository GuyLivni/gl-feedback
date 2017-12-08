import React         from 'react';
import styled        from 'styled-components';
import {Header}      from 'semantic-ui-react';

const Brand = styled.div`
    text-align: center;
    color: #000;
`;

const HeaderBrand = () => (
  <Brand>
    <Header size="huge" content="Feedback" />
  </Brand>
);

export default HeaderBrand;