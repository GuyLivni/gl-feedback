/* @flow */
import React                       from 'react';
import { Link }                    from 'react-router-dom';
import styled                      from 'styled-components';
import { Segment, Icon, Dropdown } from 'semantic-ui-react';

const Menu = styled(Segment)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px !important;
`;

const options = [
  { key: '1', value: 'title', text: 'Title' },
  { key: '2', value: 'no', text: 'No votes' },
  { key: '3', value: 'yes', text: 'Yes votes' },
  { key: '4', value: 'dateSent', text: 'Sent date' }
];

type Props = {
  onSurveySort: Function
}

const SurveyMenu = ({ onSurveySort }: Props) => (
  <Menu>
    <Link to="/surveys/new">
      <Icon name="wpforms"/>Create New Survey
    </Link>
    <Dropdown
      selection
      value={""}
      placeholder='Sort by'
      onChange={(e, { value }) => onSurveySort(value)}
      options={options}
    />
  </Menu>
);

export default SurveyMenu;