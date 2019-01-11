import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Die from './Die';

it('renders without crashing', function() {
  shallow(<Die />);
});

it('matches unlocked snapshot', function() {
  let wrapper = shallow(<Die locked={false} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it('matches locked snapshot', function() {
  let wrapper = shallow(<Die locked={true} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
