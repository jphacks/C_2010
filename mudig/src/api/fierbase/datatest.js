import React from 'react';
import Header from '../../components/Header.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import firebase from './firebase.js'
import 'firebase/firestore'

import "firebase/storage";


import GetMusicData from './getfiredata.js'
import GetAllData from './getalldata.js'
import AddMusicData from './addfiredata.js'

import List from './list.js'

//<GetMusicData  type="length"/>でデータの数を取れる
//<GetMusicData id={0} type="title"/> で曲のタイトルをとれるよ
//
class Firetest extends React.Component {
  render() {


    return (
      <div>
      {/* <GetMusicData  type="length"/>
      <br/>
      <GetMusicData id={0} type="title"/>
      /
      <GetMusicData id={0} type="artist"/>
      <br/>
      <GetMusicData id={0} type="comment"/>
      <br/>
      <GetMusicData id={0} type="start_time"/>
      ~
      <GetMusicData id={0} type="finish_time"/>
       */}

      <br/>
      </div>
    )
  }
}


export default Firetest;
