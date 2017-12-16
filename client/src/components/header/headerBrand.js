import React         from 'react';
import styled        from 'styled-components';
import {Header}      from 'semantic-ui-react';

const Brand = styled.div`
  cursor: default;
  text-align: center;
  font-size: 1.2em;
  background: -webkit-linear-gradient(to right, #9E7CC1, #8ECDEA);
	background: linear-gradient(to right, #9E7CC1, #8ECDEA);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const HeaderBrand = () => (
  <Brand>
    <Header size="huge" content="Feedback" />
  </Brand>
);

export default HeaderBrand;