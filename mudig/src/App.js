import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dig from './container/dig.js';
import Library from './container/library.js';
import Post from './container/post.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Firetest from './api/fierbase/datatest.js'

import firebase from "firebase";


function App() {
  return (
    <div>
      <Router>
        <Header className="fixed" />
        <div>
          <Route exact path="/" component={Dig} />
          <Route path="/library" component={Library} />
          <Route path="/post" component={Post} />
          <Route path="/firetest" component={Firetest} />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
