import React                     from 'react';
import {Link}                    from 'react-router-dom';
import {Segment, Icon, Dropdown} from 'semantic-ui-react';
import './surveyMenu.css';

const sortOptions = [
  { key: '1', value: 'title', text: 'Title' },
  { key: '2', value: 'no', text: 'No votes' },
  { key: '3', value: 'yes', text: 'Yes votes' },
  { key: '4', value: 'sent date', text: 'Sent date' }
];

const SurveyMenu = () =>
  <Segment className="survey-menu" color='blue'>
    <Link to="/surveys/new">
      <Icon name="wpforms"/>Create New Survey
    </Link>
    <Dropdown selection placeholder='Sort by' options={sortOptions}/>
  </Segment>;

export default SurveyMenu;