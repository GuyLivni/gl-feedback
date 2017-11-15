import _                    from 'lodash';
import React, {Component}   from 'react';
import {reduxForm, Field}   from 'redux-form';
import {Link}               from 'react-router-dom';
import {Form, Button}       from 'semantic-ui-react';
import SurveyField          from './SurveyField';
import validateEmails       from '../../utils/validateEmails';
import formFields           from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({label, name}) =>
      <Field
        key={name}
        component={SurveyField}
        type="text"
        label={label}
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

  _.each(formFields, ({name}) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${name} value`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);