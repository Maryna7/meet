import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import { mockData } from '../mock-data';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the main page is open. The user should received a list of upcoming events in specific city/all cities', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    when('the user should see a list of all upcoming events in this city', () => {
      expect(AppWrapper.find('.event')).toHaveLength(2);
    });

    then('the event details shouldn’t be visible to the user', () => {
      expect(AppWrapper.find('.event .event-details')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('a list of all upcoming events in specific city/all cities is showing', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
      expect(AppWrapper.find('.event .event-details')).toHaveLength(0);
    });

    when('the user clicks on the “Show details” button of the event', () => {
      AppWrapper.find('.event .show-details').at(0).simulate('click');
    });

    then('the user should see more information about this event', () => {
      expect(AppWrapper.find('.event .event-details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('an event details is open. The user should received a list of upcoming events in specific city/all cities', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.event .show-details').at(0).simulate('click');
      expect(AppWrapper.find('.event .event-details')).toHaveLength(1);
    });

    when('the user clicks on the “Hide details” button of the event', () => {
      AppWrapper.find('.event .show-details').at(0).simulate('click');
    });

    then('the details of the event should be hidden', () => {
      expect(AppWrapper.find('.event .event-details')).toHaveLength(0);
    });
  });
});