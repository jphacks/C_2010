import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dig from './container/dig.js';
import Library from './container/library.js';
import Post from './container/post.js';
import Header from './components/header.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <div>
          <Route path="/dig" component={ Dig } />
          <Route path="/library" component={ Library } />
          <Route path="/post" component={ Post } />
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
