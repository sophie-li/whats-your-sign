import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header />);
});

it('expect to render Header component', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should not update component', () => {
  const shouldUpdate = wrapper
    .instance()
    .shouldComponentUpdate({ props: 'bla' }, {});
  expect(shouldUpdate).toBe(false);
});
