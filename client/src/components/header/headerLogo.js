import React         from 'react';
import styled        from 'styled-components';
import {Link}        from "react-router-dom";
import logo          from '../../assets/images/logo.png';

const Logo = styled(Link)`
    flex: 1 1 0%;
    margin-left: 40px;
`;

const Img = styled.img.attrs({
  src: logo,
  alt: 'logo'
})`
    width: 7%;
`;

const HeaderLogo = ({isAuthenticated}) => (
  <Logo to={isAuthenticated ? '/surveys' : '/'}>
    <Img />
  </Logo>
);

export default HeaderLogo;