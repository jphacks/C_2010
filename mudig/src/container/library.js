import React from 'react';
import { Link } from 'react-router-dom';

import '../css/library.css';
import FavCard from '../components/FavCard.js';

class Library extends React.Component {
  render() {
    return (
      <div className="library">
        <div className="lib-title">
          <h3>Library</h3>
        </div>
        <div className="music-list">
          <FavCard/>
          <FavCard/>
          <FavCard/>
          <div className="clear"></div>
        </div>
        
        {/* 開発用のページ移動ボタン */}
        <br/>
        <button className="dev-button"><Link to="/dig">Digへ移動</Link></button>
        <button className="dev-button"><Link to="/post">Postへ移動</Link></button>
      </div>
    );
  }
};

export default Library;