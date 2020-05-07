import React from 'react';
import Card from './Card';

const CardList = ({ signs }) => {
  console.log('SIGNS ---', signs);
  return (
    <div className='flex flex-wrap justify-center'>
      {signs.map((sign, index) => {
        const {
          id,
          name,
          spiritColor,
          luckyNumbers,
          symbol,
          luckyDay,
          rulingPlanet,
          qualities,
          emojis,
        } = signs[index];
        return (
          <Card
            key={index}
            id={id}
            name={name}
            symbol={symbol}
            spiritColor={spiritColor}
            luckyNumbers={luckyNumbers}
            luckyDay={luckyDay}
            rulingPlanet={rulingPlanet}
            qualities={qualities}
            emojis={emojis}
          />
        );
      })}
    </div>
  );
};

export default CardList;
