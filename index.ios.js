import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image
} from 'react-native';

import RandomThing from './src/RandomThing.js'


react_test = () => (
  <View style={styles.view_style}>
      <RandomThing/>
      <Text>'=========='</Text>
      <RandomThing/>
  </View>
)

const styles = {
  view_style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5D0FF',
  }
};

AppRegistry.registerComponent('react_test', () => react_test);
