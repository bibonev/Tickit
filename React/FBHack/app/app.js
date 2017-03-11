import React, { Component } from 'react';
// import {AppBar} from 'react-native-material-ui';
import {
  AppRegistry,
  Text,
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';
import { COLOR, ThemeProvider, Button} from 'react-native-material-ui';

export default class FBHack extends Component {


 
  render() {

    return (

      <ThemeProvider>
        <View>
        
        <Swiper height={600} style={styles.wrapper} scrollEnabled={true} 


        showsButtons={true} loop={false} showsPagination={true}> 

          <View style={styles.slide1}>
            <Text style={styles.text}>Log in screen 1</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Log in screen 2</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>Log in screen 3</Text>
          </View>

        </Swiper>

          <View>
            <Button primary text="Log IN"/>
          </View>
        </View>

      </ThemeProvider>

    );
  }
}


var styles = StyleSheet.create({
  wrapper: {

  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',

  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})  

AppRegistry.registerComponent('FBHack', () => FBHack);
