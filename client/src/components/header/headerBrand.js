import React         from 'react';
import styled        from 'styled-components';
import { Link }      from 'react-router-dom';
import { Header }    from 'semantic-ui-react';

const Brand = styled(Link)`
  text-align: center;
  font-size: 1.2em;
  background: -webkit-linear-gradient(to right, #9E7CC1, #8ECDEA);
	background: linear-gradient(to right, #9E7CC1, #8ECDEA);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const HeaderBrand = () => (
  <Brand to='/'>
    <Header size="huge" content="Feedback" />
  </Brand>
);

export default HeaderBrand;