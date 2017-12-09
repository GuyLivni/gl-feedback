import React           from 'react';
import {Container}     from 'semantic-ui-react';
import styled          from 'styled-components';
import SurveyList      from '../surveys/SurveyList';
import SurveyMenu      from '../surveys/surveyMenu';

const SurveysContainer = styled(Container)`
  padding-top: 20px;
`;

const Surveys = () => {
  return (
    <SurveysContainer>
      <SurveyMenu/>
      <SurveyList/>
    </SurveysContainer>
  );
};

export default Surveys;