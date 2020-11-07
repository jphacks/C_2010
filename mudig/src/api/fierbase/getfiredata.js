import React, { Component } from "react";
import firebase from "./firebase.js";
import "firebase/storage";

async function getMusicData(id, type){
  let db = firebase.database();
  //  var data;
  let data = await db.ref("/").once("value").then(snapshot => snapshot.val());

    if (data == null || data.length == 0) {
      data = await db.ref("/").once("value").then(snapshot => snapshot.val());
    }
    console.log(data);
    var index = await id;
    console.log("index=" + index);
    switch (type) {
      case "title":
        return data[index]?.music.title;
        break;
      case "artist":
        return data[index]?.music.artist;
        break;
      case "comment":
        return data[index]?.music.comment;
        break;
      case "start_time":
        return data[index]?.music.start_time;
        break;
      case "finish_time":
        return data[index]?.music.finish_time;
        break;
      case "url":
        return data[index]?.music.url;
        break;
      case "length":
        return data.length;
        break;
      default:
        return "type error"
    }
}

export default getMusicData;
