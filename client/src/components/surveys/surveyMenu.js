import React                     from 'react';
import {Link}                    from 'react-router-dom';
import styled                    from 'styled-components';
import {Segment, Icon, Dropdown} from 'semantic-ui-react';

const Menu = styled(Segment)`
    display: flex;
    justify-content: space-between;
    align-items: center
`;

const sortOptions = [
  { key: '1', value: 'title', text: 'Title' },
  { key: '2', value: 'no', text: 'No votes' },
  { key: '3', value: 'yes', text: 'Yes votes' },
  { key: '4', value: 'sent date', text: 'Sent date' }
];

const SurveyMenu = () =>
  <Menu color='blue'>
    <Link to="/surveys/new">
      <Icon name="wpforms"/>Create New Survey
    </Link>
    <Dropdown selection placeholder='Sort by' options={sortOptions}/>
  </Menu>;

export default SurveyMenu;