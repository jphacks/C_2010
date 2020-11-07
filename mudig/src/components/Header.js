import React from 'react';
import '../css/components/header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false,
    }
  }
  toggleMenuState() {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
    console.log(this.state.menuIsOpen);
  }
  render() {
    const menuVisuable = this.state.menuIsOpen ? { "display": "block" } : { "display": "none" };
    return (
      <header>
        <div className="header">
          <div className="symbol">Mudig</div>
          <div className="menu-icon" onClick={ () => this.toggleMenuState() }>
            <i className="fas fa-bars fa-2x"></i>
          </div>

          <ul className="menu" style={ menuVisuable }>
            <li onClick={ () => this.toggleMenuState() }><Link to="/">Dig</Link></li>
            <li onClick={ () => this.toggleMenuState() }><Link to="/library">Library</Link></li>
            <li onClick={ () => this.toggleMenuState() }><Link to="/post">Post</Link></li>
          </ul>
        </div>
        <div className="add-margin-top"></div>
      </header>
    )
  };
}

export default Header;
