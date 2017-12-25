import React          from 'react';
import {List, Button,
        Header, Icon} from 'semantic-ui-react';
import formFields     from './formFields';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const fieldsList = formFields.map(({ name, label }) => {
    return (
      <List.Item key={name}>
        <List.Content>
          <List.Header>{label}</List.Header>
          <List.Description>{formValues[name]}</List.Description>
        </List.Content>
      </List.Item>
    );
  });

  const renderHeader = () => (
    <Header as='h3' key="header">
      <Icon name='list' />
      <Header.Content>
        Survey Content
        <Header.Subheader>
          Please confirm your entries
        </Header.Subheader>
      </Header.Content>
    </Header>
  );

  const renderButtons = () => (
    <Button.Group key="buttons">
      <Button content="Back to editing" onClick={onCancel} negative/>
      <Button.Or />
      <Button
        primary
        content="Send Survey"
        onClick={() => submitSurvey(formValues)}
      />
    </Button.Group>
  );

  return [
    renderHeader(),
    <List key="list" animated>{fieldsList}</List>,
    renderButtons()
  ];
};

export default SurveyFormReview;
