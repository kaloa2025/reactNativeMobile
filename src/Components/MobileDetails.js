import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Item from './Item.js';
import ItemSection from './ItemSection.js';

const MobileDetails = (props) => {
  const {headContainer, headerText, imageStyle} = styles;
  const {mobile} = props;
  return (
    <Item>
      <ItemSection>
        <View style={headContainer}>
          <Text style={headerText.text}>Brand: {props.mobile.brand}</Text>
          <Text style={headerText.text}>Model: {props.mobile.model}</Text>
          <Text style={headerText.text}>URL: {props.mobile.url}</Text>
        </View>
      </ItemSection>
    </Item>
  );
};

styles = {
  headContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  headerText: {
    fontSize: 20,
    fontWeight: 500,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  imageStyle: {
    height: 300,
    flex: 1,
  },
};

export default MobileDetails;