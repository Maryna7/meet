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
  }

  updateEventCount = (eventCount) => {
    this.setState({ eventCount: eventCount });
    this.updateEvents(this.state.locations);
  };

  componentDidMount() {
    getEvents().then((events) => {
      this.setState({ events, locations: extractLocations(events) });
    });
    window.addEventListener('online', this.setOfflineWarningMessage);
    window.addEventListener('offline', this.setOfflineWarningMessage);
  }

  componentWillUnmount() {
    this.mounted = false;
    window.removeEventListener('online', this.setOfflineWarningMessage);
    window.removeEventListener('offline', this.setOfflineWarningMessage);
  }

  setOfflineWarningMessage = () => {
    console.log(this);
    if (!navigator.onLine) {
      this.setState({
        warningText: 'No internet connection. Events list has been loaded from the cache.'
      })
    } else {
      this.setState({
        warningText: ''
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