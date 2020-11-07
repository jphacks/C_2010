import React from 'react';
import '../css/components/favCard.css';
import getMusicData from '../api/fierbase/getfiredata';
import YoutubeFrame from '../api/youtube/youtubeFrame';

class FavCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      url: '',
      title: '',
      artist: ''
    };
  };
  async componentWillMount(){
    console.log("called willMount");
    this.setState({
      url: await getMusicData(this.state.id, "url"),
      title: await getMusicData(this.state.id, "title"),
      artist: await getMusicData(this.state.id, "artist")
    });
  };
  render() {
    console.log(this.state.url);
    console.log(this.state.title);
    return (
      <>
      { this.state.url ? (
      <div className="music-card">
        <YoutubeFrame src={this.state.url} edge="150" />
        <div className="music-info">
          <div className="nameWrapper">
            <h3 className="music-name">{this.state.title}</h3>
            <h5 className="artist-name">{this.state.artist}</h5>
          </div>
          <div className="like">
            <i className="fas fa-heart fa-lg"></i>
          </div>
        </div>
      </div>

      ) : null }
      </>
    );
  };
}

export default FavCard;