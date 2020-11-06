import React from 'react';
import Header from '../../components/Header.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import firebase from './firebase.js'
import 'firebase/firestore'
import GetMusicData from './getfiredata.js'
import "firebase/storage";

import List from './list.js'


class Firetest extends React.Component {
  render() {


    return (
      <div>
      <GetMusicData  type="length"/>
      <br/>
      <GetMusicData id={0} type="title"/>
      </div>
    )
  }
}


export default Firetest;
