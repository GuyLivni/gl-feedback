import React  from 'react';
import styled from 'styled-components';

const StyledTextInfo = styled.span`
  color: #546b81;
  font-weight: 300;
`;

const TextInputInfo = ({info}) => {
  return (
    <StyledTextInfo>
      {info}
    </StyledTextInfo>
  );
};

export default TextInputInfo;
