/* @flow */
import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import SurveyList from "./surveyList";
import SurveyMenu from "./surveyMenu";
import { surveysActions } from "../../redux/state/surveys";

const SurveysContainer = styled(Container)`
  padding-top: 20px;
`;

type Props = {
  actions: {
    fetchSurveys: Function,
    deleteSurvey: Function,
    sortSurvey: Function,
  },
  surveys: Array<Object>
};

class Survey extends Component<Props> {
  componentDidMount() {
    this.props.actions.fetchSurveys();
  }

  handleDelete = (id: string) => this.props.actions.deleteSurvey(id);

  handleSort = (sortBy: string) => this.props.actions.sortSurvey(sortBy);

  render() {
    return (
      <SurveysContainer>
        <SurveyMenu onSurveySort={this.handleSort} />
        <SurveyList
          surveys={this.props.surveys}
          onSurveyDelete={this.handleDelete}
        />
      </SurveysContainer>
    );
  }
}

const mapStateToProps = ({ surveys }) => ({
  surveys
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...surveysActions
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
