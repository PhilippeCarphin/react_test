import React, { Component } from 'react'
import { Text , View , Image} from 'react-native'

class Figure extends Component {
  render() {
    return (
            <View style={styles.figure_style}>
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

const styles = {
  figure_style : {
    justifyContent : 'center',
    alignItems : 'center',
    borderWidth : 2,
    borderRadius : 5
  }
}

export default Figure
