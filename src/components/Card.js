import React from 'react';
import Emoji from 'a11y-react-emoji';

const Card = ({
  name,
  symbol,
  spiritColor,
  luckyNumbers,
  luckyDay,
  rulingPlanet,
  qualities,
  emojis,
}) => {
  const hex = {
    red: '#FF0000',
    'pale blue': '#afeeee',
    yellow: '#ffff00',
    'sea green': '#2e8b57',
    gold: '#ffd700',
    'navy blue': '#000080',
    blue: '#0000ff',
    crimson: '#dc143c',
    purple: '#800080',
    'dark green': '#006400',
    'electric blue': '#7df9ff',
    'pale green': '#98fb98',
  };

  return (
    <div className='tc grow bg-light-pink br3 pa3 ma2 dib bw2 shadow-5 w-25 pa3 mr2'>
      <img alt='sign' src={`./images/${name}.png`} />
      <h2 className='ttu tracked'>
        {name}
        <Emoji symbol={emojis.name} label={name} />
      </h2>

      <div className='ttu'>
        <span className='b'>Symbol:</span> {symbol}{' '}
        <Emoji symbol={emojis.symbol} label={symbol} />
      </div>

      <div className='ttu'>
        <span className='b'>Spirit Color:</span> {spiritColor}
        <div
          className='square-color'
          style={{ backgroundColor: hex[spiritColor] }}
        />
      </div>

      <div className='ttu'>
        <span className='b'>Lucky Numbers:</span> {luckyNumbers.join(', ')}
      </div>

      <div className='ttu'>
        <span className='b'>Lucky Day:</span> {luckyDay}
      </div>

      <div className='ttu'>
        <span className='b'>Ruling Planet:</span> {rulingPlanet}{' '}
        <Emoji symbol={emojis.planet} label={rulingPlanet} />
      </div>

      <div className='ttu'>
        <span className='b'>Qualities:</span> {qualities.join(', ')}
      </div>
    </div>
  );
};

export default Card;
