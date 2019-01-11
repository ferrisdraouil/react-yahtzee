import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RuleRow from './RuleRow';

describe('simple smoke test', () => {
  it('renders without crashing', function() {
    shallow(<RuleRow />);
  });

  it('matches unlocked snapshot', function() {
    let wrapper = shallow(<RuleRow />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});
