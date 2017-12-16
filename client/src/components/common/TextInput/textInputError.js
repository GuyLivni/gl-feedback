import React from 'react';
import styled from 'styled-components';

const StyledError = styled.span`
 color: #b71c1c;
`;

const TextInputError = ({error}) => {
  return (
    <StyledError>
      {error}
    </StyledError>
  );
};

export default TextInputError;
