import { shallow } from 'enzyme';
import React from 'react';
import RandomImage from './RandomImage';

it('expect to render RandomImage component', () => {
  expect(shallow(<RandomImage />)).toMatchSnapshot();
});

it('correctly changes imageID', () => {
  const wrapper = shallow(<RandomImage />);

  wrapper.find('[id="magic-img"]').simulate('click');
  let imageID = wrapper.state().imageID;
  expect(imageID).toBeGreaterThanOrEqual(1);
  expect(imageID).toBeLessThan(51);

  wrapper.find('[id="magic-img"]').simulate('click');
  imageID = wrapper.state().imageID;
  expect(imageID).toBeGreaterThanOrEqual(1);
  expect(imageID).toBeLessThan(51);
});
