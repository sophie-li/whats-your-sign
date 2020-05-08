import React, { Component } from 'react';

class RandomImage extends Component {
  constructor(props) {
    super(props);
    this.state = { imageID: 1 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.imageID !== nextState.imageID) {
      return true;
    }
    return false;
  }

  updateImageID = (e) => {
    const imageID = Math.floor(Math.random() * 50) + 1; // Random number between 1 to 50
    this.setState(() => {
      return { imageID: imageID };
    });
  };

  render() {
    const { imageID } = this.state;
    const url = process.env.PUBLIC_URL + `/images/magic/magic-${imageID}.png`;
    return (
      <img
        src={url}
        className='magic-img'
        onClick={this.updateImageID}
        alt='random magic'
      />
    );
  }
}

export default RandomImage;
