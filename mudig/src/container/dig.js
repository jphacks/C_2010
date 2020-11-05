import React from 'react';
import Header from '../components/Header.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../css/dig.css';

class Dig extends React.Component {
  render() {
    return (
      <div>
        Digページです
        {/* 開発用のページ移動ボタン */}
        <br/>
        <button className="dev-button"><Link to="/library">Libraryへ移動</Link></button>
        <button className="dev-button"><Link to="/post">Postへ移動</Link></button>
      </div>
    );
  }
};

export default Dig;