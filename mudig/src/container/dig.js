import React from 'react';
import { Link } from 'react-router-dom';

import '../css/dig.css';
import Player from '../components/Player.js';
import Comment from '../components/Comment.js';

class Dig extends React.Component {
  render() {
    return (
      <div>
        <Player/>
        <Comment/>
      </div>
    );
  }
};

export default Dig;