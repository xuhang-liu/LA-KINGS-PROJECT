import ReactAudioPlayer from 'react-audio-player';
import React, { Component } from "react";

export class AudioPlayer extends Component {
  render() {
    return (
      <ReactAudioPlayer
        src={this.props.url}
        controls
      />
    );
  }
}

export default AudioPlayer;

