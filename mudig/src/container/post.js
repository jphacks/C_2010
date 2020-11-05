import React from 'react';
import { Link } from 'react-router-dom';

class Post extends React.Component {
  render() {
    return (
      <div>
        Postページです

        {/* 開発用のページ移動ボタン */}
        <br/>
        <button className="dev-button"><Link to="/dig">Digへ移動</Link></button>
        <button className="dev-button"><Link to="/library">Libraryへ移動</Link></button>
      </div>
    );
  }
};

export default Post;