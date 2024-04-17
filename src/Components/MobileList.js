import axios from 'axios';
import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import MobileDetails from './MobileDetails.js';

export class MobileList extends Component {
  state = {mobilelist: []};

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/kaloa2025/mobile/db')
      .then(response => {
        this.setState({mobilelist: response.data});
      });
  }
  renderList = () => {
    return this.state.mobilelist.map((mobile, index) => {
      return <MobileDetails key={index} mobile={mobile} />;
    });
  };

  render() {
    console.log(this.state);
    return <ScrollView>{this.renderList()}</ScrollView>;
  }
}

export default MobileList;