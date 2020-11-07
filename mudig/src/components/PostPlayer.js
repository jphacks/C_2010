import React from 'react';
import '../css/components/postplayer.css';

import jacketImage from '../img/jacket-image.jpg';


class PostPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false
    }
  }
  togglePlayingState() {
    console.log("tapped play button");
    this.setState({ isPlaying: !this.state.isPlaying });
  }
  tappedRightButton() {
    console.log("tapped right button");
  }
  tappedLeftButton() {
    console.log("tapped left button");
  }
  render() {
    const ctl = this.state.isPlaying ? "fas fa-pause fa-3x" : "fas fa-play fa-3x";
    return (
      <div className="post-player">
        <div className="">
          <div className="post-jacket">
            <img className="jacket-img" src={jacketImage} />
            <div className="seekbar">
              <div className="play-pos" />
            </div>
          </div>
        </div>
        <div className="controller">
          <div className="set-start" onClick={ () => this.tappedLeftButton() }><i className="fas fa-caret-left fa-4x"></i></div>
          <div className="play-button" onClick={ () => this.togglePlayingState() }><i className={ ctl }></i></div>
          <div className="set-end" onClick={ () => this.tappedRightButton() }><i className="fas fa-caret-right fa-4x"></i></div>
        </div>
      </div>
    );
  };
}

export default PostPlayer;