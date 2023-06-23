import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { mockData } from '../mock-data';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper, NumberOfEventsWrapper;
  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('the main page is open. The user should received a list of upcoming events in a specific city/all cities', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    when('the user hasn’t specified the number of the events', () => {

    });

    then('the page should display 32 upcoming events. Or less when in specific city are less upcoming events than 32', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents updateEventCount={() => { }} />)
      expect(NumberOfEventsWrapper.state('query')).toEqual(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('the page displayed 32 upcoming events in specific city/all cities. Or less when in specific city are less upcoming events than 32', async () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents updateEventCount={() => { }} />)
      expect(NumberOfEventsWrapper.state('query')).toEqual(32);
    });

    when('the user specifies the number of events that should be loaded', () => {
      NumberOfEventsWrapper.find('.NumberOfEvents').simulate('change', { target: { value: 2 } });
    });

    then('the number of events in the list should be changed to the one selected by the user', () => {
      expect(NumberOfEventsWrapper.state('query')).toEqual(2);
    });
  });

})