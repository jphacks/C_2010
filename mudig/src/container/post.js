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
      </div>
    );
  }
};

export default Post;
