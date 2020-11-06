import React from 'react';
import '../css/components/postplayer.css';

import jacketImage from '../img/jacket-image.jpg';


class PostPlayer extends React.Component {
  render() {
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
          <div className="set-start"><i class="fas fa-caret-left fa-4x"></i></div>
          <div className="play-button"><i class="fas fa-play fa-3x"></i></div>
          <div className="set-end"><i class="fas fa-caret-right fa-4x"></i></div>
        </div>
      </div>
    );
  };
}

export default PostPlayer;