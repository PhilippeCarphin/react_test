/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Bananas extends Component {
  render() {
    let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
            <Image source={pic} style={{width: 193, height: 110}}/>
            );
  }
}

class Figure extends Component {
  render() {
    return (
            <View>
            <Image source={require('./TPOP.jpg')} style={{width: 100, height:100}} />
            <Text> {this.props.caption} </Text>
            </View>
            // The following line doesn't work but the caption thing works.  I was expecting to
            // be able to use this.props.filename like I did with the caption but it doesn't work
            // that way it seems.  I should try to understand javascript.
            // <Image source={require(this.props.filename)} style={{width: 100, height:100}} />
            );
  }
}

export default class react_test extends Component {
  render() {
    return (
      <View style={styles.container}>
            <Text> Hello mother, hello father </Text>
            <Bananas />
            <Figure caption="This is the caption" filename='./TPOP.jpg'/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
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
});

AppRegistry.registerComponent('react_test', () => react_test);

// AppRegistry.registerComponent('Banannas', () => react_test);
