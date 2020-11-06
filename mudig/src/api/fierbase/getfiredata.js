import React, { Component } from "react";
import firebase from "./firebase.js";
import "firebase/storage";

class GetMusicData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
     this.getFireData();
  }

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

      render() {
        if (this.state.data==null　|| this.state.data.length == 0) {
          this.getFireData();
        }
        var index=this.props.id;
        console.log("index="+index)
        if (this.state.data == null || this.state.data.length == 0) {
          return [
            <tr key="0">
              <th>ロード中</th>
            </tr>
          ];
        }
        switch (this.props.type) {
          case "title":
            return this.state.data[index].music.title;
            break;
          case "artist":
            return this.state.data[index].music.artist;
            break;
          case "comment":
            return this.state.data[index].music.comment;
            break;
          case "start_time":
            return this.state.data[index].music.start_time;
            break;
          case "finish_time":
            return this.state.data[index].music.finish_time;
            break;
          case "url":
            return this.state.data[index].music.url;
            break;
          case "length":
            return this.state.data.length;
            break;
          default:
            return "type error"
        }

      }
}

export default GetMusicData;
