import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

  let NumberOfEventsWrapper, NumberOfEventsInput;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
    NumberOfEventsInput = NumberOfEventsWrapper.find('input.NumberOfEvents');
  });

  test('render NumberOfEvents and an input', () => {
    expect(NumberOfEventsWrapper).toBeDefined();
    expect(NumberOfEventsInput).toBeDefined();
    expect(NumberOfEventsInput.prop('type')).toBe('number');
  });

  test('default number of events is 32', () => {
    expect(NumberOfEventsInput.prop('value')).toBe(32);
  });

  test('number of events is changed', () => {
    expect(NumberOfEventsWrapper.state('query')).toBe(32);
    NumberOfEventsInput.simulate('change', { target: { value: 10 } });
    expect(NumberOfEventsWrapper.state('query')).toBe(10);
  });

  test('number of events is too big', () => {
    NumberOfEventsInput.simulate('change', { target: { value: 100 } });
    expect(NumberOfEventsWrapper.find('.AlertText')).toBeDefined();
    expect(NumberOfEventsWrapper.find('.AlertText').text()).toBe("Please select a number from 1 to 60");
  })

  test('number of events is too smal', () => {
    NumberOfEventsInput.simulate('change', { target: { value: 0 } });
    expect(NumberOfEventsWrapper.find('.AlertText').text()).toBe("Please select a number from 1 to 60");
  })
});