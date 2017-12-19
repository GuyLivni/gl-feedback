import React           from 'react';
import {Container}     from 'semantic-ui-react';
import {connect}       from 'react-redux';
import styled          from 'styled-components';
import SurveyList      from '../surveys/SurveyList';
import SurveyMenu      from '../surveys/surveyMenu';
import * as actions    from '../../actions';

const SurveysContainer = styled(Container)`
  padding-top: 20px;
`;

class SurveyDashboard extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  handleDelete = id => this.props.deleteSurvey(id);

  render() {
    return (
      <SurveysContainer>
        <SurveyMenu/>
        <SurveyList
          surveys={this.props.surveys}
          onSurveyDelete={this.handleDelete}
        />
      </SurveysContainer>
    );
  }
}

const mapStateToProps = ({surveys}) => ({
  surveys
});

export default connect(mapStateToProps, actions)(SurveyDashboard);