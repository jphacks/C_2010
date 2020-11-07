import React, { Component } from "react";
import firebase from "firebase";
import "firebase/storage";

import GetAllData from './getalldata.js'

//import AddMusicData from '/mudig/src/api/fierbase/addfiredata.js' みたいにインポートしてくれれば使えるよ
//下のように関数を呼べばセットできるよ。music内のデータは型のアルファベット順でお願いします。
// AddMusicData("BUMP OF CHICKEN","聞け",64,94,"66号線","https://www.youtube.com/watch?v=XGB0Sf71IBI");
async function AddMusicData(artist, comment, finish_time, start_time, title, url) {

    var data = await GetAllData();
    console.log("data.length=",data.length);
    firebase.database().ref('/' + data.length).set({
        id: data.length,
        music: {
            artist: artist,
            comment: comment,
            finish_time: finish_time,
            start_time: start_time,
            title: title,
            url: url
        }
    });

}

export default AddMusicData;
