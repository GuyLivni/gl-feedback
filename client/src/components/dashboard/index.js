import React                      from 'react';
import {Container}                from 'semantic-ui-react';
import styled                     from 'styled-components';
import SurveyList                 from '../surveys/SurveyList';
import SurveyMenu                 from '../surveys/surveyMenu';

const DashboardContainer = styled(Container)`
  padding-top: 20px;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <SurveyMenu/>
      <SurveyList/>
    </DashboardContainer>
  );
};

export default Dashboard;