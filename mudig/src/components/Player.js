import React from 'react';
import '../css/components/player.css';

import jacketImage from '../img/jacket-image.jpg';


class Player extends React.Component {
  render() {
    return (
      <div className="player">
        <div className="top">
          <div className="left-btn">
            <i className="fas fa-chevron-left fa-3x"></i>
          </div>
          <div className="jacket-wrapper">
            <div className="jacket">
              <img className="jacket-img" src={jacketImage} />
              <div className="seekbar">
                <div className="play-pos" />
              </div>
            </div>
          </div>
          <div className="right-btn">
            <i className="fas fa-chevron-right fa-3x"></i>
          </div>
        </div>
        <div className="bottom">
          <div className="volume-ctl"><i className="fas fa-volume-up fa-2x"></i></div>
          <div className="music-info">
            <h3>Pretender</h3>
            <h5>Official髭男dism</h5>
          </div>
          <div className="like-ctl"><i className="far fa-heart fa-2x"></i></div>
        </div>
      </div>
    );
  };
}

export default Player;