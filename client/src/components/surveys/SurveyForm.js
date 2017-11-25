import _                    from 'lodash';
import React, {Component}   from 'react';
import {reduxForm, Field}   from 'redux-form';
import {Link}               from 'react-router-dom';
import {Form, Button}       from 'semantic-ui-react';
import SurveyField          from './surveyField';
import validateEmails       from '../../utils/validateEmails';
import formFields           from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({label, name, placeholder}) =>
      <Field
        key={name}
        component={SurveyField}
        type="text"
        label={label}
        placeholder={placeholder}
        name={name}/>
    )
  }

  renderButtons() {
    return (
      <Button.Group>
        <Button negative>
          <Link style={{color: "#fff"}} to="/surveys">Cancel</Link>
        </Button>
        <Button.Or />
        <Form.Button primary content="Done" />
      </Button.Group>
    )
  }

  render() {
    return (
      <Form error onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
        {this.renderFields()}
        {this.renderButtons()}
      </Form>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');
  errors.from = validateEmails(values.from || '');

  _.each(formFields, ({name, errorMessage}) => {
    if (!values[name]) {
      errors[name] = errorMessage;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);