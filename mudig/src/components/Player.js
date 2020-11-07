import React from 'react';
import '../css/components/player.css';

import jacketImage from '../img/jacket-image.jpg';


class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      // 再生位置を管理
      playingRate: 0,
    }
  }
  toggleLike() {
    this.setState({ liked: !this.state.liked })
    this.state.liked ? this.liked() : this.unliked();
  }
  liked() {
    // Likeした時の実装
    console.log("liked");
  }
  unliked() {
    // Likeを外した時の実装
    console.log("unliked");
  }
  tappedLeftButton() {
    // 左の矢印を押された時の実装
    console.log("tapped left button");
  }
  tappedRightButton() {
    // 右の矢印を押された時の実装
    console.log("tapped right button");
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
    const likeCls = this.state.liked ? "far fa-heart fa-2x" : "fas fa-heart fa-2x";
    const likeStyle = this.state.liked ? {"color": "#333"} : {"color": "red"};
    return (
      <div className="player">
        <div className="top">
          <div className="left-btn" onClick={ () => this.tappedLeftButton() }>
            <i className="fas fa-chevron-left fa-3x"></i>
          </div>
          <div className="jacket-wrapper">
            <div className="jacket">
              <img className="jacket-img" src={ jacketImage } />
              <div className="seekbar" onClick={ (e) => this.tappedSeekBar(e) }>
                <div className="play-pos" style={{"width": `${ this.state.playingRate }%`}}></div>
              </div>
            </div>
          </div>
          <div className="right-btn" onClick={ () => this.tappedRightButton() }>
            <i className="fas fa-chevron-right fa-3x"></i>
          </div>
        </div>
        <div className="bottom">
          <div className="volume-ctl"><i className="fas fa-volume-up fa-2x"></i></div>
          <div className="music-info">
            <h3>Pretender</h3>
            <h5>Official髭男dism</h5>
          </div>
          <div className="like-ctl" onClick={ () => this.toggleLike() }>
            <i className={ likeCls } style={ likeStyle }></i>
            </div>
        </div>
      </div>
    );
  };
}

export default Player;