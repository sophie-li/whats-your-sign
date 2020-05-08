import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component', () => {
  const mockSigns = [
    {
      id: 1,
      startDate: '03-21',
      endDate: '04-19',
      name: 'aries',
      sign: 'fire',
      emoji: 'ram',
      symbol: 'the ram',
      spiritColor: 'red',
      luckyNumbers: [1, 9],
      luckyDay: 'tuesday',
      rulingPlanet: 'Mars',
      qualities: ['brave', 'optimistic', 'passionate', 'active', 'energetic'],
      emojis: {
        name: '♈',
        symbol: '🐏',
        planet: '♂️',
      },
    },
  ];

  expect(shallow(<CardList signs={mockSigns} />)).toMatchSnapshot();
});
