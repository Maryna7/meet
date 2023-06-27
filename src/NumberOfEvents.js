import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      query: 32,
      errorText: ''
    };
  }

  handleInputChanged = (event) => {
    const input = event.target.value;
    this.setState({
      query: input,
    });
    let query;
    if (input > 60) {
      query = 60;
      this.setState({ errorText: 'Please select a number from 1 to 60' });
    } else if (input < 1) {
      query = 32;
      this.setState({ errorText: 'Please select a number from 1 to 60' });
    } else {
      query = input;
      this.setState({ errorText: '' });
    }
    this.props.updateEventCount(query);
  };

  render() {

    return (
      <div className="NumberOfEventsHolder">
        <h4>Number of Events</h4>
        <input
          className="NumberOfEvents"
          type="number"
          value={this.state.query}
          onChange={this.handleInputChanged}
          placeholder={'number of events'}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;