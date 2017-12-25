import React, { Component }  from 'react';
import { reduxForm }         from 'redux-form';
import { Container }         from 'semantic-ui-react';
import { connect }           from 'react-redux';
import styled                from 'styled-components';

import { surveysActions }    from '../../redux/state/surveys';
import SurveyForm            from './surveyForm/SurveyForm';
import SurveyFormReview      from './surveyForm/SurveyFormReview';

const SurveyCreateContainer = styled(Container)`
    margin: 40px;
`;

class SurveyCreate extends Component {
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
      <SurveyCreateContainer>
        {this.renderContent()}
      </SurveyCreateContainer>
    );
  }
}

const mapStateToProps = ({ form }) => ({
  formValues: form
});

const mapDispatchToProps = ({
  submitSurvey: surveysActions.submitSurvey,
});

export default reduxForm({
  form: 'surveyForm'
})(connect(mapStateToProps, mapDispatchToProps)(SurveyCreate));