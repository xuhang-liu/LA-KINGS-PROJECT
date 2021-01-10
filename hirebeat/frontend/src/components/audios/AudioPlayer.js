import ReactAudioPlayer from 'react-audio-player';
import React, { Component } from "react";

export class AudioPlayer extends Component {
  render() {
    return (
        <div>
            <ReactAudioPlayer
              src={this.props.url}
              controls
            />
        </div>
    );
  }
}

export default AudioPlayer;

