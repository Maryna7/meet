import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import { WarningAlert } from './Alert';


class App extends Component {
  state = {
    events: [],
    locations: [],
    warningText: ''
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      let locationEvents = (location === 'all') ?
        events :
        events.filter((event) => location.includes(event.location));

      if (locationEvents.length > this.state.eventCount) {
        locationEvents.length = this.state.eventCount
      }
      this.setState({
        events: locationEvents
      });
    });
    if (!navigator.onLine) {
      this.setState({
        warningText: 'You have no internet connection. Events list has been loaded from the cache.'
      })
    } else {
      this.setState({
        warningText: ''
      });
    }
  }

  updateEventCount = (eventCount) => {
    this.setState({ eventCount: eventCount });
    this.updateEvents(this.state.locations);
  };

  componentDidMount() {
    getEvents().then((events) => {
      this.setState({ events, locations: extractLocations(events) });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  setOfflineWarningMessage = () => {
    if (!navigator.onLine) {
      this.setState({
        warningText: 'You have no internet connection. Events list has been loaded from the cache.'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <WarningAlert text={this.state.warningText} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEventCount={this.updateEventCount} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;