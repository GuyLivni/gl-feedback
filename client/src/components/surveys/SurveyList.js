import React, {Component}                   from 'react';
import {connect}                            from 'react-redux';
import {Card, Modal, Header, Button}        from 'semantic-ui-react';
import {fetchSurveys, deleteSurvey}         from '../../actions';
import SurveyItem                           from './surveyItem';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  handleDelete = (id) => {
    this.props.deleteSurvey(id);
  };

  renderDeleteModal = (id) => {
    return (
      <Modal
        trigger={<Button compact floated="right" content="delete" />}
        dimmer="blurring"
        size="tiny"
        header={<Header icon="remove circle outline" content="Delete Survey" />}
        content="Are you sure you want to delete this survey?"
        actions={[
          { key: 'No', content: 'No', negative: true },
          { key: 'Yes', content: 'Yes', positive: true, onClick: () => this.handleDelete(id) },
        ]}
      />
    )
  };

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
        const surveyId = survey._id;
        return (
          <SurveyItem
            key={surveyId}
            {...survey}
            renderModal={this.renderDeleteModal(surveyId)}/>
        )
      }
    );
  }

  render() {
    return <Card.Group itemsPerRow="3">{this.renderSurveys()}</Card.Group>
  }
}

function mapStateToProps({surveys}) {
  return {surveys}
}

export default connect(mapStateToProps, {fetchSurveys, deleteSurvey})(SurveyList);