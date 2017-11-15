import React, {Component}      from 'react';
import {connect}               from 'react-redux';
import {Card, Icon, Statistic}            from 'semantic-ui-react';
import {fetchSurveys}          from '../../actions';
import "./SurveyList.css"

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <Card key={survey._id}>
          <Card.Content>
            <Card.Header>
              {survey.title}
            </Card.Header>
            <Card.Meta>
              {survey.subject}
            </Card.Meta>
            <Card.Description>
              {survey.body}
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <Statistic size="mini" horizontal>
              <Statistic.Value>
                <Icon color='green' name='check circle outline'/>
                {survey.yes}
              </Statistic.Value>
            </Statistic>
            <Statistic size="mini" horizontal>
              <Statistic.Value>
                <Icon color='red' name='remove circle outline'/>
                {survey.no}
              </Statistic.Value>
            </Statistic>
          </Card.Content>
          <Card.Content extra>
            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
          </Card.Content>
        </Card>
      )
    });
  }

  render() {
    return <Card.Group itemsPerRow="3">{this.renderSurveys()}</Card.Group>
  }
}

function mapStateToProps({surveys}) {
  return {surveys}
}

export default connect(mapStateToProps, {fetchSurveys})(SurveyList);