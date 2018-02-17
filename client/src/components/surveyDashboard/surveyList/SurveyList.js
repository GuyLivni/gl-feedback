/* @flow */
import React from "react";
import { Card, Modal, Header, Button } from "semantic-ui-react";
import SurveyItem from "./surveyItem";

type Props = {
  surveys: Array<Object>,
  onSurveyDelete: Function
};

const SurveyList = ({ surveys, onSurveyDelete }: Props) => {
  const renderSurveys = () =>
    surveys.map(survey => {
      const surveyId = survey._id;
      return (
        <SurveyItem
          key={surveyId}
          {...survey}
          renderModal={renderDeleteModal(surveyId)}
        />
      );
    });

  const renderDeleteModal = (surveyId: string) => (
    <Modal
      trigger={<Button compact floated="right" content="delete" />}
      dimmer="inverted"
      size="tiny"
      header={<Header icon="archive" content="Delete Survey" />}
      content="Are you sure you want to delete this survey?"
      actions={[
        { key: "No", content: "No", negative: true },
        {
          key: "Yes",
          content: "Yes",
          positive: true,
          onClick: () => onSurveyDelete(surveyId)
        }
      ]}
    />
  );

  return (
    <Card.Group stackable itemsPerRow="3">
      {renderSurveys()}
    </Card.Group>
  );
};

export default SurveyList;
