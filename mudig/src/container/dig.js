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
      currentId: ""
    };
  };
  async componentDidMount() {
    console.log("called willMount");
    this.setState({
      ids: await GetAllData(),
    }, () => {this.setState({
         currentId: this.state.ids[0],
       });
      })
  };
  onIncrement = () => {
    this.setState({ currentId: this.state.currentId + 1 },()=> console.log(this.state.currentId));
  };
  onDecrement = () => {
    console.log("called decrement")
    this.setState({ currentId: this.currentId - 1 });
  };
  render() {
    return (
      <>
      { this.state.ids ? (
      <div>
        <Player id={this.state.currentId} onPrev={this.onDecrement} onNext={this.onIncrement}/>
        <Comment id={this.state.currentId} />
      </div>
      ) : null }
      </>
    );
  }
};

export default Dig;