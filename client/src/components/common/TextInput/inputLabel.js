import React  from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  position: absolute;
  top: ${({focused, value}) => focused || value ? '0px' : '18px'};
  font-size: ${({focused, value}) => focused || value ? '13px' : '15px'};
  color: ${({focused, value, error, touched}) => (error && touched) ? '#b71c1c' : ((focused || value) ? '#03a9f4' : '#000') };
  display: inline-block;
  pointer-events: none;
  transition: 0.3s all;
  transition-timing-function: cubic-bezier(0.02, 0.01, 0.47, 1);
  text-transform: capitalize;
  text-align: left;
  opacity: ${({disabled}) => disabled ? '0.45' : '1'};
`;

const InputLabel = ({ label, focused, value, disabled, error, touched, required }) => (
  <StyledLabel focused={focused} value={value} disabled={disabled} error={error} touched={touched} >
    {required ? `${label} *` : label}
  </StyledLabel>
);

export default InputLabel;
