import React                            from 'react';
import { Card, Modal, Header, Button }  from 'semantic-ui-react';
import SurveyItem                       from './surveyItem';

const renderDeleteModal = (surveyId, handleDelete) => (
  <Modal
    trigger={<Button compact floated="right" content="delete" />}
    dimmer="inverted"
    size="tiny"
    header={<Header icon="archive" content="Delete Survey" />}
    content="Are you sure you want to delete this survey?"
    actions={[
      { key: 'No', content: 'No', negative: true },
      { key: 'Yes', content: 'Yes', positive: true, onClick: () => handleDelete(surveyId) },
    ]}
  />
);

const renderSurveys = (surveys, onSurveyDelete) => (
  surveys.map(survey => {
      const surveyId = survey._id;
      return (
        <SurveyItem
          key={surveyId}
          {...survey}
          renderModal={renderDeleteModal(surveyId, onSurveyDelete)}/>
      )
    }
  )
);

const SurveyList = ({surveys, onSurveyDelete}) => (
  <Card.Group stackable itemsPerRow="3">
    {renderSurveys(surveys, onSurveyDelete)}
  </Card.Group>
);

export default SurveyList;