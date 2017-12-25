import React                    from 'react';
import styled                   from 'styled-components';
import {Dropdown, Icon, Modal}  from 'semantic-ui-react';
import MainMenu                 from './headerMainMenu';
import ProfileMenu              from './headerProfileMenu';
import Login                    from '../../views/login';
import {media}                  from '../../utils/styleUtils';

const HeaderMenu = ({ user, isAuthenticated, logOutUser, onStripePayment }) => {

  const Menu = styled(Dropdown.Menu)`
    display: flex;
    align-items: center;
    ${ media.handheld`
       font-size: 0.9em;
    ` }
  `;

  const LoginBtn = styled.button`
    font-size: 1.1em;
    color: #4a8dab;
    background: none;
    outline: 0;
    border: 0;
    cursor: pointer;
    &:hover {
      color: #29627b;
    }
  `;

  const renderContent = () => {
    if (isAuthenticated) {
      return [
        <MainMenu key="main-menu" onStripePayment={onStripePayment} />,
        <ProfileMenu key="profile-menu" user={user} logout={logOutUser} />
      ]
    }

    return (
      <Modal
        trigger={
          <LoginBtn>
            <Icon name="sign in"/> Login
          </LoginBtn>
        }
        dimmer="inverted"
        size="small"
        basic
        content={<Login />}
      />
    )
  };

  return <Menu>{renderContent()}</Menu>
};

export default HeaderMenu;