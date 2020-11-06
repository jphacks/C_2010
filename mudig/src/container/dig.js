import React from 'react';
import { Link } from 'react-router-dom';
import GetAllData from '../api/fierbase/getalldata';
import '../css/dig.css';
import Player from '../components/Player.js';
import Comment from '../components/Comment.js';

class Dig extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: "",
      currentId: "",
    };
  };
  async componentDidMount() {
    console.log("called willMount");
    this.setState({
      ids: await GetAllData(),
    });
    if(this.state.ids){
       this.setState({
         currentId: this.state.ids[0],
       });
    }
  };
  onIncrement = () => {
    this.setState({ currentId: this.currentId + 1 });
  };
  onDecrement = () => {
    this.setState({ value: this.currentId - 1 });
  };
  render() {
    console.log(this.state.ids);
    return (
      <>
      { this.state.ids ? (
      <div>
        <Player id={this.state.currentId} onPrev={this.onIncrement} onNext={this.onDecrement}/>
        <Comment id={this.state.currentId} />

        {/* 開発用のページ移動ボタン */}
        <button>
          <Link to="/dig">Digへ移動</Link>
        </button>
        <button>
          <Link to="/library">Libraryへ移動</Link>
        </button>
        <button>
          <Link to="/post">Postへ移動</Link>
        </button>
      </div>
      ) : null }
      </>
    );
  }
};

export default Dig;