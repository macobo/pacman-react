import React from 'react';
import gameOver from '../../../assets/audio/game_over.wav';

class GameOver extends React.Component {

	componentDidMount() {
		this.audio = new Audio(gameOver);
    this.audio.play();
  }

  componentWillUnmount() {
    this.audio.pause()
  }

	render() {
    return null;
  }
}

export default GameOver;
