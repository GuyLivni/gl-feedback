import React         from 'react';
import styled        from 'styled-components';
import {Link}        from "react-router-dom";
import logo          from '../../assets/images/logo.png';
import { media }     from '../../utils/styleUtils';

const Logo = styled(Link)`
    flex: 1 1 0%;
    margin-left: 40px;
    ${ media.handheld`
       margin-left: 0;
    ` }
`;

const Img = styled.img.attrs({
  src: logo,
  alt: 'logo'
})`
    width: 40px;
`;

const HeaderLogo = ({isAuthenticated}) => (
  <Logo to={isAuthenticated ? '/surveys' : '/'}>
    <Img />
  </Logo>
);

export default HeaderLogo;