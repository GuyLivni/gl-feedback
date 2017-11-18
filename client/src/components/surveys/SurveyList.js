import React, {Component}      from 'react';
import {connect}               from 'react-redux';
import {Card, Header, Icon, Statistic, Button, Modal}            from 'semantic-ui-react';
import {fetchSurveys, deleteSurvey}          from '../../actions';
import "./SurveyList.css"

class SurveyList extends Component {
  state = { modalOpen: false };

  componentDidMount() {
    this.props.fetchSurveys();
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleDelete = (survey) => {
    this.props.deleteSurvey(survey._id);
    this.handleClose();
  };

  renderDeleteModal(survey) {
    return (
      <Modal
        dimmer="blurring"
        size="tiny"
        open={this.state.modalOpen}
        onClose={this.handleClose}
        trigger={<Button compact floated="right" content="delete" onClick={this.handleOpen} />}
      >
        <Header icon='archive' content='Delete Survey' />
        <Modal.Content>
          <p>Are you sure you want to delete this survey?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={this.handleClose}>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' onClick={() => this.handleDelete(survey)}>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
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
            {this.renderDeleteModal(survey)}
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

export default connect(mapStateToProps, {fetchSurveys, deleteSurvey})(SurveyList);