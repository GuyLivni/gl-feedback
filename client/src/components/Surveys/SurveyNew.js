import React, { Component } from 'react';
import { reduxForm }        from 'redux-form';
import {Container}          from 'semantic-ui-react';
import SurveyForm           from './SurveyForm';
import SurveyFormReview     from './SurveyFormReview';
import "./SurveyNew.css";

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview
        onCancel={() => this.setState({ showFormReview: false })}
      />;
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <Container className="form-container">
        {this.renderContent()}
      </Container>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);