import React, { Component } from 'react';

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
    this.props.updateEvents(query);
  };

  render() {

    return (
      <div>
        <h4>Number of Events</h4>
        <input
          className="NumberOfEvents"
          type="number"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <p
          className="AlertText"
          style={{ color: "red" }}
        >
          {this.state.errorText}
        </p>
      </div>
    );
  }
}

export default NumberOfEvents;