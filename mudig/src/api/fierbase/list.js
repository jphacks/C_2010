import React, { Component } from "react";
import firebase from "firebase";
import "firebase/storage";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
     this.getFireData();
  }

  // Firebaseからのデータ取得
  getFireData() {
    let db = firebase.database();
    let ref = db.ref("/");
    let self = this;
    ref
      .orderByKey()
      .limitToFirst(10)
      .on("value", snapshot => {
        self.setState({
          data: snapshot.val()
        });
        console.log(snapshot.val());
      });

  }

  データ表示の生成
  getTableData() {
    let result = [];
    if (this.state.data == null || this.state.data.length == 0) {
      return [
        <tr key="0">
          <th>NO DATA</th>
        </tr>
      ];
    }
    for (let i in this.state.data) {
      result.push(
        <tr key={i}>
          <th>{this.state.data[i].id}</th>
          <td>{this.state.data[i].music.title}</td>
          <td>{this.state.data[i].music.artist}</td>
        </tr>
      );
    }
    return result;
  }
//

  render() {
    if (this.state.data.length == 0) {
      this.getFireData();
    }
    return (
      <table>
      <tbody>{this.getTableData()}</tbody>
      </table>
    );
  }
}

export default List;
