import React                        from 'react';
import styled                       from 'styled-components';
import {Link}                       from 'react-router-dom';
import { Dropdown, Icon, Button }   from 'semantic-ui-react';
import Stripe                       from '../stripe';
import { media }                    from '../../utils/styleUtils';
import userImg                      from '../../assets/images/user.png';

const HeaderMenu = ({ user, isAuthenticated, history, logOutUser }) => {

  const Menu = styled(Dropdown.Menu)`
    ${ media.handheld`
       font-size: 0.9em;
    ` }
  `;

  const Avatar = styled.img.attrs({
    src: (user && user.photo) || userImg,
    alt: "user photo"
  })`
    position: relative;
    width: ${props => props.small ? "40px !important" : "60px !important"};
    height: ${props => props.small ? "40px !important" : "60px !important"};;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    overflow: hidden;
  `;

  const ProfileContainer = styled.div`
    text-align: center;
    line-height: 20px;
    padding: 8px 25px;
  `;

  const LoginBtn = styled(Button)`
    box-shadow: none !important;
    &:hover {
      box-shadow: 0 0 0 1px rgba(34,36,38,.15) inset !important;
    }
  `;

  const Divider = styled.div`
    border-bottom: 1px solid #EEF1F6;
  `;

  const renderContent = () => {
    if (isAuthenticated) {
      return <Dropdown
        floating
        pointing="top right"
        trigger={ <Avatar small /> }
      >
        <Dropdown.Menu>
          <Dropdown.Item>
            <ProfileContainer>
              <Avatar/>
              <Dropdown.Item>{user.name}</Dropdown.Item>
              <Dropdown.Item>Your Credits: {user.credits}</Dropdown.Item>
            </ProfileContainer>
          </Dropdown.Item>
          <Divider/>
          <Dropdown.Item>
            <Icon name="add square"/><Stripe/>
          </Dropdown.Item>
          <Divider/>
          <Dropdown.Item onClick={() => logOutUser()}>
            <Icon name="sign out"/> Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    }

    return history.location.pathname !== '/login' && (
      <LoginBtn as={Link} to="/login" basic>
        <Icon name="sign in" /> Login
      </LoginBtn>
    )
  };

  return <Menu>{renderContent()}</Menu>
};

export default HeaderMenu;