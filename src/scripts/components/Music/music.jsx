import React from 'react';
import music from '../../../assets/audio/musika.mp3';

class Music extends React.Component {

	componentDidMount() {
		this.audio = new Audio(music);
    this.audio.currentTime = 3;
    this.audio.play();

	}

	render() {
    return null;
  }
}

export default Music;
