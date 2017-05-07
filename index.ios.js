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

class Simplicity extends Component {
	render() {
		let pic = {
			uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
		};
		return (
				<Image source={pic} style={{width: 193, height: 110}}/>
			   );
	}
}
AppRegistry.registerComponent('Bananas', () => Bananas);

export default class react_test extends Component {
  render() {
    return (
      <View style={styles.container}>
		<Image
			source={require('./TPOP.jpg')}
		/>
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
