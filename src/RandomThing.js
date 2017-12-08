import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import Figure from './Figure';
import Bananas from './Bananas';

const RandomThing = () => (
      <View style={styles.view_style}>
            <Text style={styles.top_text_style}> Hello mother, hello father </Text>
            <Bananas />
            <Figure caption="This is the caption" filename='./TPOP.jpg'/>
      </View>
    );

const styles = {
  view_style: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

    shadowColor: '#000',
    shadowOffset: {
      width: 15, height: 50
    },
  },
  top_text_style: {
    justifyContent: 'flex-start',
    backgroundColor: '#D0A0D0'
  }
}

export default RandomThing
