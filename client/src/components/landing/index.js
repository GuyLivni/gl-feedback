import React            from 'react';
import {Container}      from 'semantic-ui-react';
import styled           from 'styled-components';

const LandingContainer = styled(Container)`
    margin-top: 150px;
    text-align: center;
`;

const Landing = () => {
  return (
    <LandingContainer>
      <h1>Collect Feedback From Your Users With Confidence</h1>
    </LandingContainer>
  );
};

export default Landing;