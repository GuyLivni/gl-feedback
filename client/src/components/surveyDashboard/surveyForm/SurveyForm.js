import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import TextInput from "../../common/TextInput/index";
import validateEmails from "../../../utils/validateEmails";
import formFields from "./formFields";

const StyledLink = styled(Link)`
  color: #fff;
  &:hover {
    color: #fff;
  }
`;

class SurveyForm extends Component {
  renderTextInput = ({ input, meta, info, label, title }) => (
    <TextInput
      info={info}
      title={title}
      label={label}
      onChange={input.onChange}
      focus={input.onFocus}
      value={input.value}
      error={meta.error}
      touched={meta.touched}
    />
  );

  renderField = ({ name, label, info }) => (
    <Field
      key={name}
      name={name}
      title={name}
      label={label}
      info={info}
      component={this.renderTextInput}
    />
  );

  renderButtons = () => (
    <Button.Group>
      <Button negative>
        <StyledLink to="/surveys">Cancel</StyledLink>
      </Button>
      <Button.Or />
      <Button type="submit" primary content="Done" />
    </Button.Group>
  );

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
        {formFields.map(this.renderField)}
        {this.renderButtons()}
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");
  errors.from = validateEmails(values.from || "");

  formFields.forEach(({ name, errorMessage }) => {
    if (!values[name]) {
      errors[name] = errorMessage;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
