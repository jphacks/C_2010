import React from 'react';
import YouTube from 'react-youtube';

class YoutubeFrame extends React.Component {
  constructor(props){
      super(props);
      this.state={
            videoId: props.src.replace(/^.*?(\?|$)/, '$1').split("=")[1],
            edge: props.edge
      }
  };
  render() {
    const opts = {
      height: this.state.edge,
      width: this.state.edge,
      playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          fa: 0,
          modestbranding: 1,
          rel: 0,
      },
    };

    return (
      <YouTube videoId={this.state.videoId} opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YoutubeFrame;