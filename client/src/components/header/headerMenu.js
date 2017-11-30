import React                        from 'react';
import styled                       from 'styled-components';
import {Link}                       from 'react-router-dom';
import { Dropdown, Icon, Button }   from 'semantic-ui-react';
import Stripe                       from '../stripe';

const Menu = styled.div`
    flex: 1 1 0%;
    margin-right: 40px;
    display: flex;
    justify-content: flex-end;
`;

const HeaderMenu = ({ user, isAuthenticated, history, logOutUser }) => {

  const menuOptions = () => [
    { key: 'signedin', text: `Signed in as: ${user.name}`, disabled: true, value: 1 },
    { key: 'stripe', text: <Stripe/>, value: 2 },
    { key: 'logout', text: <Dropdown.Item onClick={() => logOutUser()}><Icon name="sign out"/> Logout</Dropdown.Item>, value: 3 }
  ];

  const renderContent = () => {
    if (isAuthenticated) {
      return <Dropdown
        simple
        trigger={<span>Hello, {user.name} <br/>Your credits: {user.credits}</span>}
        options={menuOptions(user, logOutUser)}
      />
    }

    return history.location.pathname !== '/login' && (
      <Button as={Link} to="/login" basic>
        <Icon name="sign in" /> Login
      </Button>
    )
  };

  return <Menu>{renderContent()}</Menu>
};

export default HeaderMenu;