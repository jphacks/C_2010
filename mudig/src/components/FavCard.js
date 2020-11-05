import React from 'react';
import '../css/components/favCard.css';

import jacketImage from '../img/jacket-image.jpg';

class FavCard extends React.Component {
  render() {
    return (
      <div className="music-card">
        <img className="jacket-img" src={jacketImage}/>
        <div className="music-info">
          <h3 className="music-name">タイトル</h3>
          <h5 className="artist-name">アーティスト名</h5>
          <div className="like"><i className="fas fa-heart fa-lg"></i></div>
        </div>
      </div>
    )
  };
}

export default FavCard;