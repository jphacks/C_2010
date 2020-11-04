import React from 'react';
import styled from 'styled-components';
import '../css/components/header.css';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="symbol">Mudig</div>
          <div className="menu">メニューボタン</div>
        </div>
      </div>
    )
  };
}

export default Header;