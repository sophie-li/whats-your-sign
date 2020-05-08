import { shallow } from 'enzyme';
import React from 'react';
import RandomImage from './RandomImage';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<RandomImage />);
});

it('expect to render RandomImage component', () => {
  expect(wrapper).toMatchSnapshot();
});

it('correctly changes imageID', () => {
  wrapper.find('[id="magic-img"]').simulate('click');
  let imageID = wrapper.state().imageID;
  expect(imageID).toBeGreaterThanOrEqual(1);
  expect(imageID).toBeLessThan(51);

  wrapper.find('[id="magic-img"]').simulate('click');
  imageID = wrapper.state().imageID;
  expect(imageID).toBeGreaterThanOrEqual(1);
  expect(imageID).toBeLessThan(51);
});

it("won't update component if the imageID remains the same", () => {
  const shouldUpdate = wrapper
    .instance()
    .shouldComponentUpdate({}, { imageID: 1 });
  expect(shouldUpdate).toBe(false);
});

it('will update component if the imageID is different than previous one', () => {
  const shouldUpdate = wrapper
    .instance()
    .shouldComponentUpdate({}, { imageID: 2 });
  expect(shouldUpdate).toBe(true);
});
