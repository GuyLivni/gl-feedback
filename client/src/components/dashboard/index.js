import React                      from 'react';
import {Container}                from 'semantic-ui-react';
import SurveyList                 from '../surveys/SurveyList';
import SurveyMenu                 from '../surveys/surveyMenu';
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <Container className="dashboard-container">
      <SurveyMenu/>
      <SurveyList/>
    </Container>
  );
};

export default Dashboard;