import React from 'react';
import Header from '../../components/header.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import firebase from './firebase.js'
import 'firebase/firestore'

import Hoge from './hoge.js'
//import List from './list.js'

// var database = firebase.database();

import List from './list.js'

const foo = ['abc','ijk','xyz'];



class Welcome extends React.Component {
  render() {

    return <h1>Hello, {this.props.id}</h1>;
  }
}

// class Boo extends React.Component {
//   render(id) {
//     return(foo.id);
//   }
// }

const element = <Welcome name="Sara" />;



class Firetest extends React.Component {
  render() {
    return (
      <div>
      <Welcome id="2"/>
      <Welcome id="0"/>
      <Welcome id="1"/>
      </div>
    )
  }
}

// getFireData() {
//     let db = firebase.database();
//     let ref = db.ref("sample/");
//     let self = this;
//     ref
//       .orderByKey()
//       .limitToFirst(10)
//       .on("value", snapshot => {
//         self.setState({
//           data: snapshot.val()
//         });
//       });
//   }

export default Firetest;
