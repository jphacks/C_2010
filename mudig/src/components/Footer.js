import React from 'react';
import '../css/components/footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="share">
          <a className="btn" href="#">
            <i className="share-icon fas fa-share-alt fa-lg"></i>
          </a>
          <a className="btn" href="#">
            <i className="share-icon fab fa-twitter fa-lg"></i>
          </a>
        </div>
      </footer>
    )
  };
}

export default Footer;