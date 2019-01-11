import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ScoreTable from './ScoreTable';

it('renders without crashing', function() {
  shallow(<ScoreTable />);
});

it('matches unlocked snapshot', function() {
  let wrapper = shallow(<ScoreTable />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
