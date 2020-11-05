import React from 'react';
import '../css/components/header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header">
          <div className="symbol">Mudig</div>
          <div id="menu"><i className="fas fa-bars fa-2x"></i></div>
        </div>
        <div className="add-margin-top"></div>
      </header>
    )
  };
}

export default Header;