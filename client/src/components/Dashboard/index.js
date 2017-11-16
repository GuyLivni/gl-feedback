import React                      from 'react';
import {Link}                     from 'react-router-dom';
import {Container, Segment, Icon} from 'semantic-ui-react';
import SurveyList                 from '../Surveys/SurveyList';

const Dashboard = () => {
  return (
    <Container className="survey-container">
      <Segment>
        <Link to="/surveys/new">
          <Icon name="wpforms"/>Create New Survey
        </Link>
      </Segment>
      <SurveyList/>
    </Container>
  );
};

export default Dashboard;