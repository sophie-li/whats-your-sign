import React from 'react';

const Card = ({
  name,
  symbol,
  spiritColor,
  luckyNumbers,
  luckyDay,
  rulingPlanet,
  qualities,
}) => {
  return (
    <div className='tc grow bg-light-pink br3 pa3 ma2 dib bw2 shadow-5 w-25 pa3 mr2'>
      <img alt='sign' src={`./images/${name}.png`} />
      <h2 className='ttu tracked'>{name}</h2>

      <div className='ttu'>
        <span className='b'>Symbol:</span> {symbol}
      </div>

      <div className='ttu'>
        <span className='b'>Spirit Color:</span> {spiritColor}
        <div
          className='square-color'
          style={{ backgroundColor: spiritColor }}
        />
      </div>

      <div className='ttu'>
        <span className='b'>Lucky Numbers:</span> {luckyNumbers.join(', ')}
      </div>

      <div className='ttu'>
        <span className='b'>Lucky Day:</span> {luckyDay}
      </div>

      <div className='ttu'>
        <span className='b'>Ruling Planet:</span> {rulingPlanet}
      </div>

      <div className='ttu'>
        <span className='b'>Qualities:</span> {qualities.join(', ')}
      </div>
    </div>
  );
};

export default Card;
