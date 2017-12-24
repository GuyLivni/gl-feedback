import React            from 'react';
import {Container}      from 'semantic-ui-react';
import styled           from 'styled-components';
import Header           from '../header';
import {media}          from '../../utils/styleUtils';

const NoMatchContainer = styled(Container)`
  margin-top: 150px;
  display: flex !important;
  align-items: center;
  text-align: center;
`;

const ErrorCode = styled.h1`
  margin: 0;
  font-size: 230px;
  flex: 1;
  background: -webkit-linear-gradient(to right,#9E7CC1,#8ECDEA);
  background: linear-gradient(to right,#9E7CC1,#8ECDEA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    ${ media.handheld`
       font-size: 80px;
    ` }
`;

const ErrorMessage = styled.h2`
  color: #b2b2b2;
  font-size: 70px;
  margin: 0;
  flex: 1.3;
    ${ media.handheld`
       font-size: 30px;
    ` }
`;

const NoMatch = () => {
  return (
    <div>
      <Header/>
      <NoMatchContainer>
        <ErrorCode>404 </ErrorCode>
        <ErrorMessage>We couldn’t find this page. </ErrorMessage>
      </NoMatchContainer>
    </div>
  );
};

export default NoMatch;