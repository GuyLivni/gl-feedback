import React              from 'react';
import { Container }      from 'semantic-ui-react';
import { connect }        from 'react-redux';
import styled             from 'styled-components';
import SurveyList         from './surveyList/SurveyList';
import SurveyMenu         from './surveyMenu';
import { surveysActions } from '../../redux/state/surveys';

const SurveysContainer = styled(Container)`
  padding-top: 20px;
`;

class SurveyDashboard extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  handleDelete = id => this.props.deleteSurvey(id);

  handleSort = sortBy => this.props.sortSurvey(sortBy);

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

const mapDispatchToProps = ({
  fetchSurveys: surveysActions.fetchSurveys,
  deleteSurvey: surveysActions.deleteSurvey,
  sortSurvey: surveysActions.sortSurvey,
});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyDashboard);