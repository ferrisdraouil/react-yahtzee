import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dice from './Dice';
import Die from './Die';

it('renders without crashing', function() {
  shallow(<Dice dice={Array(5).fill(false)} locked={Array(5).fill(false)} />);
});
it('renders without crashing with mount', function() {
  mount(<Dice dice={Array(5).fill(false)} locked={Array(5).fill(false)} />);
});

it('matches unlocked snapshot', function() {
  let wrapper = mount(
    <Dice
      dice={Array(5).fill(false)}
      locked={[true, false, true, false, true]}
    />
  );
  let dieOneProps = wrapper
    .find(Die)
    .at(0)
    .props();
  let dieTwoProps = wrapper
    .find(Die)
    .at(1)
    .props();
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
  // expect(dieOneProps.locked).toEqual(true);
  // expect(dieTwoProps.locked).toEqual(false);
  wrapper.unmount();
});
