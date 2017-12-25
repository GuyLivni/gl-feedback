import React            from 'react';
import { Container }    from 'semantic-ui-react';
import styled           from 'styled-components';
import Header           from '../../components/header/index';

const HomeContainer = styled(Container)`
    margin-top: 150px;
    text-align: center;
`;

const Home = () => {
  return (
    <div>
      <Header/>
      <HomeContainer>
        <h1>Collect Feedback From Your Users With Confidence</h1>
      </HomeContainer>
    </div>
  );
};

export default Home;