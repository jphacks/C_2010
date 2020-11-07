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
      liked: false,
      // 再生位置を管理
      playingRate: 0,
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
      <>
        {this.state.url ? (
          <div className="player">
            <div className="top">
              <div className="left-btn" onClick={ () => this.tappedLeftButton() }>
                <i
                  class="fas fa-chevron-left fa-3x"
                  onClick={this.props.onPrev}
                ></i>
              </div>
              <div className="jacket-wrapper">
                <div className="jacket">
                  <YoutubeFrame src={this.state.url} edge="250" />
                  <div className="seekbar" onClick={ (e) => this.tappedSeekBar(e) }>
                <div className="play-pos" style={{"width": `${ this.state.playingRate }%`}}></div>
              </div>
                </div>
              </div>
              
              <div className="right-btn" onClick={ () => this.tappedRightButton() }>
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
              <div className="like-ctl" onClick={ () => this.toggleLike() }>
                <i className={ likeCls } style={ likeStyle }></i>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Player;
