import React from 'react';
import '../css/components/player.css';

import jacketImage from '../img/jacket-image.jpg';


class Player extends React.Component {
  render() {
    return (
      <div className="player">
        <div className="top">
          <div className="left-btn">
            <i class="fas fa-chevron-left fa-3x"></i>
          </div>
          <div className="jacket-wrapper">
            <div className="jacket">
              <img className="jacket-img" src={jacketImage} />
              <div className="seekbar">
                <div className="play-pos"/>
              </div>
            </div>
          </div>
          <div className="right-btn">
            <i class="fas fa-chevron-right fa-3x"></i>
          </div>
          <div className="clear"></div>
        </div>
        <div className="bottom">
          BOTTOM
        </div>
      </div>
    );
  };
}

export default Player;