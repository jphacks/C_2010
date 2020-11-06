import React from 'react';
import '../css/components/comment.css';

class Header extends React.Component {
  render() {
    return (
      <div className="comment">
        <div className="comment-header">
          <div className="comment-header-left">
            <img src="#"/>
            <p className="username">Guest</p>
          </div>
          <div className="comment-header-right">
            <p>2020/11/4 21:27</p>
          </div>
        </div>
        <div className="comment-body">
          <p>
            この曲最高ですよ！！USA!!USA!!<br/>
            ダンスがツボです。<br/>
            ジャケットがダサいところがミソです
          </p>
        </div>
      </div>
    )
  };
}

export default Header;