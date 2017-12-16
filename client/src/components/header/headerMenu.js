import React                    from 'react';
import styled                   from 'styled-components';
import {Link}                   from 'react-router-dom';
import {Dropdown, Icon}         from 'semantic-ui-react';
import MainMenu                 from './headerMainMenu';
import ProfileMenu              from './headerProfileMenu';
import {media}                  from '../../utils/styleUtils';

const HeaderMenu = ({user, isAuthenticated, logOutUser}) => {

  const Menu = styled(Dropdown.Menu)`
    display: flex;
    align-items: center;
    ${ media.handheld`
       font-size: 0.9em;
    ` }
  `;

  const LoginBtn = styled(Link)`
    font-size: 1.1em;
    color: #4a8dab;
    &:hover {
      color: #29627b;
    }
  `;

  const renderContent = () => {
    if (isAuthenticated) {
      return [
        <MainMenu key="main-menu" />,
        <ProfileMenu key="profile-menu" user={user} logout={logOutUser} />
      ]
    }

    return (
      <LoginBtn to="/login">
        <Icon name="sign in" /> Login
      </LoginBtn>
    )
  };

  return <Menu>{renderContent()}</Menu>
};

export default HeaderMenu;