import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dig from './container/dig.js';
import Library from './container/library.js';
import Post from './container/post.js';

function App() {
  return (
    <div>
    {/* ↓create-react-appしたときの画面 */}
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
      </div> */}
      <Router>
        <div>
          <Route path="/dig" component={ Dig } />
          <Route path="/library" component={ Library } />
          <Route path="/post" component={ Post } />
        </div>
      </Router>
    </div>
  );
}

export default App;
