import React from 'react';
import '../css/components/comment.css';
import getMusicData from '../api/fierbase/getfiredata';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      comment: "",
    };
  }
  async componentWillMount() {
    console.log("called willMount");
    this.setState({
      comment: await getMusicData(this.state.id, "comment"),
    });
  }
  render() {
    return (
      <>
      { this.state.comment ? (
      <div className="comment">
        <div className="comment-header">
          <div className="comment-header-left">
            <img src="logo192.png" />
            <p className="username">Guest</p>
          </div>
          <div className="comment-header-right">
            <p>2020/11/4 21:27</p>
          </div>
        </div>
        <div className="comment-body">
          <p>
            {this.state.comment}
          </p>
        </div>
      </div>
      ) : ( <h1>あああ</h1>) }
      </>
    );
  }
}

export default Header;