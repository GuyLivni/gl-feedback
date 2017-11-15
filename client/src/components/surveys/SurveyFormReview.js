import _              from 'lodash';
import React          from 'react';
import { connect}     from 'react-redux';
import { withRouter } from 'react-router-dom';
import {List, Button,
        Header, Icon} from 'semantic-ui-react';
import * as actions   from '../../actions';
import formFields     from './formFields';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const fieldsList = _.map(formFields, ({ name, label }) => {
    return (
      <List.Item key={name}>
        <List.Content>
          <List.Header>{label}</List.Header>
          <List.Description>{formValues[name]}</List.Description>
        </List.Content>
      </List.Item>
    );
  });

  return (
    <div>
      <Header as='h3'>
        <Icon name='list' />
        <Header.Content>
          Survey Content
          <Header.Subheader>
            Please confirm your entries
          </Header.Subheader>
        </Header.Content>
      </Header>
      <List>{fieldsList}</List>
      <Button.Group>
        <Button content="Back to editing" onClick={onCancel} negative />
        <Button.Or />
        <Button primary content="Send Survey" onClick={() => submitSurvey(formValues, history)} />
      </Button.Group>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default withRouter(connect(mapStateToProps, actions)(SurveyFormReview));
