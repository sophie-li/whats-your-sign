import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestSigns: jest.fn(),
    signs: [],
    searchField: '',
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it('expect to render MainPage', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters signs correctly, giving empty results', () => {
  const mockProps2 = {
    onRequestSigns: jest.fn(),
    signs: [{ id: 2, name: 'aries' }],
    searchField: 'b',
    isPending: false,
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);

  expect(wrapper2.instance().filterSigns()).toEqual([]);
});

it('filters signs correctly, giving matching results', () => {
  const mockProps3 = {
    onRequestSigns: jest.fn(),
    signs: [{ id: 2, name: 'aries' }],
    searchField: 'a',
    isPending: false,
  };
  const wrapper3 = shallow(<MainPage {...mockProps3} />);

  expect(wrapper3.instance().filterSigns()).toEqual([{ id: 2, name: 'aries' }]);
});
