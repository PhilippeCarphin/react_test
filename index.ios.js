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
        <Text>"Texte entre les figures"</Text>
        <Figure caption='Figure 2'/>
        <Text>"Texte entre les figures"</Text>
        <Figure caption='Figure 3'/>
        <Text>"Texte entre les figures"</Text>
        <Figure caption='Figure 4'/>
        <Text>"Texte entre les figures"</Text>
        <Figure caption='Figure 5'/>
        <Text>"Texte entre les figures"</Text>
        <Figure caption='Figure 6'/>
        <Text>"Texte entre les figures"</Text>
        <Figure caption='Figure 7'/>
        <Text>"Texte entre les figures"</Text>
        <Figure caption='Figure 8'/>
        <Text>"Texte entre les figures"</Text>
        <Figure caption='Figure 9'/>
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
