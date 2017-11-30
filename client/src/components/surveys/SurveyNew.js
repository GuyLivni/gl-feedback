import React, { Component } from 'react';
import { reduxForm }        from 'redux-form';
import {Container}          from 'semantic-ui-react';
import styled               from 'styled-components';
import SurveyForm           from './SurveyForm';
import SurveyFormReview     from './SurveyFormReview';

const SurveyNewContainer = styled(Container)`
    margin: 40px;
`;

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
      <SurveyNewContainer>
        {this.renderContent()}
      </SurveyNewContainer>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);