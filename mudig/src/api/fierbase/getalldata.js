import React, { Component } from "react";
import firebase from "firebase";
import "firebase/storage";

async function GetAllData() {
  let db = firebase.database();
  //  var data;
  let data = await db.ref("/").once("value").then(snapshot => snapshot.val());

  console.log("data: ", data);
  return data
}

export default GetAllData;
