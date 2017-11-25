import React                   from 'react';
import {Card, Icon, Statistic} from 'semantic-ui-react';

const SurveyItem = ({ title, subject, body, yes, no, dateSent, renderModal, from }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {title}
        </Card.Header>
        <Card.Meta>
          {subject}
        </Card.Meta>
        <Card.Description>
          {body}
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Statistic size="mini" horizontal>
          <Statistic.Value>
            <Icon color='green' name='check circle outline'/>
            {yes}
          </Statistic.Value>
        </Statistic>
        <Statistic size="mini" horizontal>
          <Statistic.Value>
            <Icon color='red' name='remove circle outline'/>
            {no}
          </Statistic.Value>
        </Statistic>
      </Card.Content>
      <Card.Content extra>
        <Card.Meta>From: {from}</Card.Meta>
        Sent on: {new Date(dateSent).toLocaleDateString()}
        {renderModal}
      </Card.Content>
    </Card>
  );
};

export default SurveyItem;