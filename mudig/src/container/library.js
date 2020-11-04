import React from 'react';
import Header from '../components/header.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Library extends React.Component {
  render() {
    return (
      <div className="is-variable">
        Libraryページです
        
        {/* 開発用のページ移動ボタン */}
        <br/>
        <button className="dev-button"><Link to="/dig">Digへ移動</Link></button>
        <button className="dev-button"><Link to="/post">Postへ移動</Link></button>
      </div>
    );
  }
};

export default Library;