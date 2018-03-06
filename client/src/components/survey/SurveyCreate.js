/* @flow */
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import styled from "styled-components";
import { bindActionCreators } from "redux";

import { surveysActions } from "../../redux/state/surveys";
import SurveyForm from "./surveyForm";
import SurveyFormReview from "./surveyForm/SurveyFormReview";

const SurveyCreateContainer = styled(Container)`
  margin: 40px;
`;

type Props = {
  actions: {
    submitSurvey: Function
  },
  history: Object,
  formValues: Object
};

type State = {
  showFormReview: boolean
};

class SurveyCreate extends Component<Props, State> {
  state = { showFormReview: false };

  handleSubmit = (formValues: Object) =>
    this.props.actions.submitSurvey(formValues, this.props.history);

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
          formValues={this.props.formValues.surveyForm.values}
          submitSurvey={this.handleSubmit}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <SurveyCreateContainer>{this.renderContent()}</SurveyCreateContainer>
    );
  }
}

const mapStateToProps = ({ form }) => ({
  formValues: form
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...surveysActions
    },
    dispatch
  )
});

export default reduxForm({
  form: "surveyForm"
})(connect(mapStateToProps, mapDispatchToProps)(SurveyCreate));
