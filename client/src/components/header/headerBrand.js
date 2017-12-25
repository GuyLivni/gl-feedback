import React         from 'react';
import styled        from 'styled-components';
import { Link }      from 'react-router-dom';
import { Header }    from 'semantic-ui-react';
import { media }     from '../../utils/styleUtils';

const Brand = styled(Link)`
  text-align: center;
  font-size: 2.2em;
  background: -webkit-linear-gradient(to right, #9E7CC1, #8ECDEA);
	background: linear-gradient(to right, #9E7CC1, #8ECDEA);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	  ${ media.handheld`
       font-size: 1.8em;
    `}
`;

const HeaderBrand = () => (
  <Brand to='/'>
    <Header content="Feedback" />
  </Brand>
);

export default HeaderBrand;