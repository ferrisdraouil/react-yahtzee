import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson, { mountToJson } from 'enzyme-to-json';
import Game from './Game';

it('renders without crashing', function() {
  shallow(<Game />);
});

it('should change Die CSS onClick', function() {
  let wrapper = mount(<Game />);
  let die = wrapper.find('Die').at(0);
  expect(die.props().locked).toEqual(false);
  die.simulate('click');
  die = wrapper.find('Die').at(0);
  expect(die.props().locked).toEqual(true);
});
