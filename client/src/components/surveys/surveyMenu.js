import React, {Component}        from 'react';
import {connect}                 from 'react-redux';
import {Link}                    from 'react-router-dom';
import styled                    from 'styled-components';
import {Segment, Icon, Dropdown} from 'semantic-ui-react';
import * as actions              from '../../actions';

const Menu = styled(Segment)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px !important;
`;

class SurveyMenu extends Component {
  state = {
    value: "",
    options: [
      { key: '1', value: 'title', text: 'Title' },
      { key: '2', value: 'no', text: 'No votes' },
      { key: '3', value: 'yes', text: 'Yes votes' },
      { key: '4', value: 'dateSent', text: 'Sent date' }
    ]
  };

  handleChange = (e, { value }) => {
    this.props.sortSurvey(value);
  };

  render() {
    const {options, value} = this.state;
    return(
      <Menu>
        <Link to="/surveys/new">
          <Icon name="wpforms"/>Create New Survey
        </Link>
        <Dropdown
          selection
          value={value}
          placeholder='Sort by'
          onChange={this.handleChange}
          options={options}
        />
      </Menu>
    )
  }
}

export default connect(null, actions)(SurveyMenu);