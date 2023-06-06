import React from 'react';
import { shallow } from 'enzyme';
import Event from "../Event";
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper, event;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  test('renders the component', () => {
    expect(EventWrapper).toBeDefined();
  });

  test('render event\'s titile', () => {
    const title = EventWrapper.find("h2.title");
    expect(title).toHaveLength(1);
    expect(title.text()).toBe(event.summary);
  });

  test('render basic information about the event', () => {
    expect(EventWrapper.find(".basic-info")).toHaveLength(1);
    const time = EventWrapper.find(".time");
    expect(time).toHaveLength(1);
    expect(time.text()).toBe(`${new Date(event.start.dateTime).toString()} ${new Date(event.originalStartTime.dateTime).toString()}`);
    const location = EventWrapper.find(".location");
    expect(location).toHaveLength(1);
    expect(location.text()).toBe(`@${event.summary} | ${event.location}`);
    const showDetailsButton = EventWrapper.find("button.show-details");
    expect(showDetailsButton).toHaveLength(1);
    expect(showDetailsButton.text()).toBe("Show details");
  });

  test("hidden event details", () => {
    const showDetailsButton = EventWrapper.find("button.show-details");
    expect(EventWrapper.find(".event-details")).toHaveLength(0);
    expect(EventWrapper.find("h3.about")).toHaveLength(0);
    expect(EventWrapper.find("a.link")).toHaveLength(0);
    expect(EventWrapper.find("p.description")).toHaveLength(0);
    showDetailsButton.simulate("click");
    expect(EventWrapper.state("hidden")).toBeFalsy();
  });

  test('render event details', () => {
    const showDetailsButton = EventWrapper.find("button.show-details");
    expect(EventWrapper.find(".event-details")).toHaveLength(1);
    expect(EventWrapper.find("h3.about")).toHaveLength(1);
    expect(EventWrapper.find("h3.about").text()).toBe("About event:");
    expect(EventWrapper.find("a.link")).toHaveLength(1);
    expect(EventWrapper.find("a.link").text()).toBe("See details on Google Calendar");
    expect(EventWrapper.find("a.link").prop("href")).toBe(event.htmlLink);
    expect(EventWrapper.find("p.description")).toHaveLength(1);
    showDetailsButton.simulate("click");
    expect(EventWrapper.state("hidden")).toBeTruthy();

  });
});