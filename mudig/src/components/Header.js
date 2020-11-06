import React from 'react';
import '../css/components/header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header">
          <div className="symbol">Mudig</div>
          <div className="menu">
          <i className="fas fa-bars fa-2x"></i>


          {/*コピペ*/}
          <ul class="menu">
             <li><a href="dig">Dig</a>

             </li>
             <li><a href="library">Library</a>

             </li>
             <li><a href="post">Post</a>

             </li>
          </ul>

          </div>





        </div>
        <div className="add-margin-top"></div>
      </header>
    )
  };
}

export default Header;
