import React              from 'react';
import styled             from 'styled-components';
import {Dropdown,Icon}    from 'semantic-ui-react';
import userImg            from '../../assets/images/user.png';

const ProfileContainer = styled.div`
    text-align: center;
    line-height: 20px;
    padding: 8px 25px;
  `;

const Avatar = styled.img.attrs({
  src: ({user}) => (user && user.photo) || userImg,
  alt: "user photo"
})`
    position: relative;
    width: ${({small}) => small ? "35px !important" : "60px !important"};
    height: ${({small}) => small ? "35px !important" : "60px !important"};;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    overflow: hidden;
  `;

const Divider = styled.div`
   border-bottom: 1px solid #EEF1F6;
`;

const HeaderProfileMenu = ({user, logout}) => (
  <Dropdown icon={false} floating pointing="top right" trigger={<Avatar user={user} small/>}>
    <Dropdown.Menu>
      <Dropdown.Item>
        <ProfileContainer>
          <Avatar user={user} />
          <Dropdown.Item>{user.name}</Dropdown.Item>
          <Dropdown.Item>Your Credits: {user.credits}</Dropdown.Item>
        </ProfileContainer>
      </Dropdown.Item>
      <Divider/>
      <Dropdown.Item onClick={() => logout()}>
        <Icon name="sign out"/> Logout
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default HeaderProfileMenu;