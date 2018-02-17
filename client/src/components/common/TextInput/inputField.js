import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  font-weight: 300;
  display: block;
  width: 100%;
  padding: 0;
  font-size: 13px;
  line-height: 24px;
  color: #294661;
  background-color: transparent;
  border: 0;
  border-bottom: ${({ touched, error }) =>
    touched && error ? "1px solid #b71c1c" : "1px solid #d4dadf"};
  box-shadow: ${({ touched, error }) =>
    touched && error ? "#b71c1c 0 1px 0" : "transparent 0 1px 0"};
  transition: 0.3s border-color, 0.3s box-shadow, 0.3s border;
  outline: 0;
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
  &:focus {
    border-bottom: ${({ touched, error }) =>
      touched && error ? "2px solid #b71c1c" : "2px solid #03a9f4"};
  }
`;

const InputField = ({
  value,
  onChange,
  onFocus,
  onBlur,
  error,
  touched,
  disabled,
  title,
  required,
  type
}) => (
  <StyledInput
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    value={value}
    error={error}
    touched={touched}
    disabled={disabled}
    type={type}
    required={required}
    title={title}
  />
);

export default InputField;
