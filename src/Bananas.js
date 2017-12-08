import React , { Component } from 'react'
import { Image, View } from 'react-native'

class Bananas extends Component {
  render() {
    let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.view_style}>
            <Image source={pic} style={styles.image_style}/>
      </View>
    );
  }
}

const styles = {
  view_style: {
    backgroundColor: '#50A0D0',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 15, height: 50
    },
    width : 220,
    height : 135
  },
  image_style: {
    width: 193,
    height: 110,
    shadowColor: '#FF0000',
    shadowOffset: {
      width: 15, height: 50
    },
  }
}

export default Bananas
