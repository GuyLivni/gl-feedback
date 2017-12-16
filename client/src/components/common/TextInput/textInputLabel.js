import React  from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  position: absolute;
  top: ${({focused, value}) => focused || value ? '0px' : '18px'};
  display: inline-block;
  font-size: ${({focused, value}) => focused || value ? '13px' : '15px'};
  pointer-events: none;
  transition: 0.3s top, 0.3s font-size;
  transition-timing-function: cubic-bezier(0.02, 0.01, 0.47, 1);
  text-transform: capitalize;
  text-align: left;
  opacity: ${({disabled}) => disabled ? '0.45' : '1'};
`;

const TextInputLabel = ({label, focused, value, disabled}) => {
  return (
    <StyledLabel focused={focused} value={value} disabled={disabled}>
      {label}
    </StyledLabel>
  );
};

export default TextInputLabel;
