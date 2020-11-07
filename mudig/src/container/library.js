import React from 'react';
import { Link } from 'react-router-dom';
import '../css/library.css';
import FavCard from '../components/FavCard.js';

class Library extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ids: [0, 1, 2, 3, 4, 5]
    }
  }
  render() {
    return (
      <>
      {
        this.state.ids ? (
          <div className="library">
            <div className="lib-title">
              <h3>Library</h3>
            </div>
            <div className="music-list">
              { this.state.ids.map(v => {
                return <FavCard key={v} id={v} />
              })}
              <div className="clear"></div>
            </div>
          </div>

        ) : (
          <h1>いいねした楽曲がありません</h1>
        )
      }
      </>
    );
  }
};

export default Library;
