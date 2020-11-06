import React from 'react';
import { Link } from 'react-router-dom';

import '../css/post.css';
import PostForm from '../components/PostForm.js';
import PostPlayer from '../components/PostPlayer';

class Post extends React.Component {
  render() {
    return (
      <div>

        <PostPlayer/>
        <PostForm/>

        {/* 開発用のページ移動ボタン */}
        <button><Link to="/dig">Digへ移動</Link></button>
        <button><Link to="/library">Libraryへ移動</Link></button>
        <button><Link to="/post">Postへ移動</Link></button>
      </div>
    );
  }
};

export default Post;
