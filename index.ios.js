import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image
} from 'react-native';

import Figure from './src/Figure';
import Bananas from './src/Bananas';

react_test = () => (
      <View style={styles.container}>
            <Text> Hello mother, hello father </Text>
            <Bananas />
            <Figure caption="This is the caption" filename='./TPOP.jpg'/>
      </View>
)

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 40,
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 20,
	marginLeft:20,
	marginRight:20,
  },
};

AppRegistry.registerComponent('react_test', () => react_test);

// AppRegistry.registerComponent('Banannas', () => react_test);
