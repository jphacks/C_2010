import React from 'react';
import '../css/components/favCard.css';
import YoutubeFrame from '../api/youtube/youtubeFrame.js';

class FavCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      url: null,
      title: null,
      artist: null
    };
  };
  render() {
    return (
      <div className="music-card">
        <YoutubeFrame src={this.state.url} edge="150" />
        <div className="music-info">
          <h3 className="music-name">{this.state.title}</h3>
          <h5 className="artist-name">{this.state.artist}</h5>
          <div className="like">
            <i className="fas fa-heart fa-lg"></i>
          </div>
        </div>
      </div>
    );
  };
}

export default FavCard;