import React, { Component } from 'react';
import { reduxForm }        from 'redux-form';
import { Container }        from 'semantic-ui-react';
import { connect }          from 'react-redux';
import styled               from 'styled-components';

import * as actions         from '../../actions';
import SurveyForm           from './SurveyForm';
import SurveyFormReview     from './SurveyFormReview';

const SurveyNewContainer = styled(Container)`
    margin: 40px;
`;

class SurveyNew extends Component {
  state = { showFormReview: false };

  handleSubmit = formValues => this.props.submitSurvey(formValues, this.props.history);

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview
        onCancel={() => this.setState({ showFormReview: false })}
        formValues={this.props.formValues.surveyForm.values}
        submitSurvey={this.handleSubmit}
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

const mapStateToProps = ({ form }) => ({
  formValues: form
});

export default reduxForm({
  form: 'surveyForm'
})(connect(mapStateToProps, actions)(SurveyNew));