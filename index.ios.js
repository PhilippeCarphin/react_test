import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import RandomThing from './src/RandomThing.js'

import Figure from './src/Figure'
import Bananas from './src/Bananas'


react_test = () => {
  return (
    <View style={styles.view_style}>
      <ScrollView style={{flex : 1}}>
        <Figure caption='Figure 1'/>
        <RandomThing/>

        <RandomThing/>
        <RandomThing/>
      </ScrollView>
    </View>
  );
};

const styles = {
  view_style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5D0FF',
  }
};

AppRegistry.registerComponent('react_test', () => react_test);
