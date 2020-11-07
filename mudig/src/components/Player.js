import React from "react";
import "../css/components/player.css";
import getMusicData from "../api/fierbase/getfiredata";
import YoutubeFrame from "../api/youtube/youtubeFrame";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      url: "",
      title: "",
      artist: "",
    };
  }
  async componentWillMount() {
    this.setState({
      firstTime: await getMusicData(this.props.id, "start_time"),
      id: this.props.id,
      title: await getMusicData(this.props.id, "title"),
      artist: await getMusicData(this.props.id, "artist"),
      url: await getMusicData(this.props.id, "url"),
    });
  }
  render() {
    return (
      <>
        {this.state.url ? (
          <div className="player">
            <div className="top">
              <div className="left-btn">
                <i
                  class="fas fa-chevron-left fa-3x"
                  onClick={this.props.onPrev}
                ></i>
              </div>
              <div className="jacket-wrapper">
                <div className="jacket">
                  <YoutubeFrame src={this.state.url} edge="250" />
                  <div className="seekbar">
                    <div className="play-pos" />
                  </div>
                </div>
              </div>
              
              <div className="right-btn">
                <i
                  class="fas fa-chevron-right fa-3x"
                  onClick={this.props.onNext}
                ></i>
              </div>
            </div>
            <div className="bottom">
              <div className="volume-ctl">
                <i class="fas fa-volume-up fa-2x"></i>
              </div>
              <div className="music-info">
                <h3>{this.state.artist}</h3>
                <h5>{this.state.title}</h5>
              </div>
              <div className="like-ctl">
                <i class="far fa-heart fa-2x"></i>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Player;
