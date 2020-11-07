import React from 'react';
import '../css/components/postplayer.css';

import jacketImage from '../img/jacket-image.jpg';


class PostPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false,
      // 再生位置を管理
      playingRate: 0,
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
  tappedSeekBar(e) {
    const zeroPos = e.target.getBoundingClientRect().left;
    const seekbarLen = e.target.getBoundingClientRect().right - zeroPos;
    const tappedPos = e.clientX;
    const diffPos = tappedPos - zeroPos;
    const playingRate = (diffPos / seekbarLen) * 100;
    console.log(playingRate);
    this.setState({ playingRate: playingRate });
  }
  render() {
    const ctl = this.state.isPlaying ? "fas fa-pause fa-3x" : "fas fa-play fa-3x";
    return (
      <div className="post-player">
        <div className="">
          <div className="post-jacket">
            <img className="jacket-img" src={jacketImage} />
            <div className="seekbar" onClick={ (e) => this.tappedSeekBar(e) }>
              <div className="play-pos" style={{"width": `${ this.state.playingRate }%`}}/>
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