import React         from 'react';
import styled        from 'styled-components';
import {Link}        from "react-router-dom";
import logo          from '../../assets/images/logo.png';

const Img = styled.img.attrs({
  src: logo,
  alt: 'logo'
})`
    width: 45px;
`;

const HeaderLogo = ({isAuthenticated}) => (
  <Link to={isAuthenticated ? '/surveys' : '/'}>
    <Img />
  </Link>
);

export default HeaderLogo;