import React, { Component } from "react";

class Event extends Component {

  state = { hidden: true };

  toggleDetails = () => {
    this.setState((prevState) => ({
      hidden: !prevState.hidden,
    }));
  };

  render() {
    const { event } = this.props;
    const { hidden } = this.state;

    const startDate = new Date(event.start.dateTime).toString();
    const startTime = new Date(event.originalStartTime.dateTime).toString();
    const time = `${startDate} ${startTime}`;

    return (
      <div className="event">
        <h2 className="title">{event.summary}</h2>
        <div className="basic-info">
          <p className="time">{time}</p>
          <p className="location">{`@${event.summary} | ${event.location}`}</p>
        </div>
        {!hidden && (
          <div className="event-details">
            <h3 className="about">About event:</h3>
            <a
              className="link"
              href={event.htmlLink}
              target="_blanck"
            >See details on Google Calendar</a>
            <p className="description"></p>
          </div>
        )}
        <button className="show-details" onClick={() => this.toggleDetails()}>
          {hidden ? "Show" : "Hidden"} details</button>
      </div>
    )
  }
}
export default Event;