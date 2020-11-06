import React from 'react';
import { Link } from 'react-router-dom';

import '../css/dig.css';
import Player from '../components/Player.js';
import Comment from '../components/Comment.js';

class Dig extends React.Component {
  render() {
    return (
      <div>
        Digページです
        <Player/>
        <Comment/>

        {/* 開発用のページ移動ボタン */}
        <br/>
        <button className="dev-button"><Link to="/library">Libraryへ移動</Link></button>
        <button className="dev-button"><Link to="/post">Postへ移動</Link></button>
      </div>
    );
  }
};

export default Dig;