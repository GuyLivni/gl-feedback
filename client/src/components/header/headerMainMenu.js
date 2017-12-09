import React              from 'react';
import styled             from 'styled-components';
import {Link}             from 'react-router-dom';
import {Dropdown,Icon}    from 'semantic-ui-react';
import Stripe             from '../stripe';

const MainMenu = styled(Dropdown)`
    background-color: transparent !important;
    font-size: 26px !important;
    padding: 0 !important;
    margin-right: 10px !important;
    color: #8dcae9 !important;
    align-self: flex-end;
  `;

const StyledLink = styled(Link)`
    color: #79589F;
    &:hover{
      color: #79589F;
    }
  `;

const StyledDropdown = styled(Dropdown.Item)`
    color: #79589F !important;
  `;

const Divider = styled.div`
   border-bottom: 1px solid #EEF1F6;
`;

const HeaderMainMenu = () => (
  <MainMenu icon={false} floating pointing="top right" trigger={<Icon name="tasks"/>}>
    <Dropdown.Menu>
      <Dropdown.Item>
        <StyledLink to='/surveys/list'>
          <Icon name="list"/>&nbsp;&nbsp;Surveys
        </StyledLink>
      </Dropdown.Item>
      <Divider/>
      <StyledDropdown>
        <Icon name="add square"/><Stripe/>
      </StyledDropdown>
    </Dropdown.Menu>
  </MainMenu>
);

export default HeaderMainMenu;