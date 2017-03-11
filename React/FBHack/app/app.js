import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class FBHack extends Component {


 
  render() {

    return (

        <View>
      <Swiper style={styles.wrapper} scrollEnabled={true} 

      prevButton={
        <View style={styles.buttonPosition}>
          <Text style={styles.buttonText}/>
        </View>}

      nextButton={
        <View style={styles.buttonPosition}>
          <Text style={styles.buttonText}>></Text>
        </View>
        }
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

      </View>

    );
  }
}


var styles = StyleSheet.create({
  wrapper: {
  },
  buttonPosition:{
    // top:window.height/2-60, 
    // right: window.width/2-60 
  },
  buttonText:{
    // color:'white',
    // backgroundColor:'black',
    // padding:3,
    // paddingLeft:30,
    // paddingRight:40

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
