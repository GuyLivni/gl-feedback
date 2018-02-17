import React from "react";
import styled from "styled-components";

const StyledError = styled.span`
  color: #b71c1c;
`;

const InputError = ({ error }) => <StyledError>{error}</StyledError>;

export default InputError;
