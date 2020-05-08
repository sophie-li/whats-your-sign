import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

const emojis = [
  {
    emojis: {
      name: '♈',
      symbol: '🐏',
      planet: '♂️',
    },
  },
];

const luckyNumbers = [1, 9];
const qualities = ['brave', 'optimistic', 'passionate', 'active', 'energetic'];

it('expect to render Card component', () => {
  expect(
    shallow(
      <Card emojis={emojis} luckyNumbers={luckyNumbers} qualities={qualities} />
    )
  ).toMatchSnapshot();
});
