import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { Button, StyleSheet, Image, TouchableOpacity, View, Text, Alert } from 'react-native';
import Colors from '../constants/Colors';

import { ScreenProps } from '../types';
import { Component } from 'react';
import Settings from '../components/Settings';

export default class HomeScreen extends Component<ScreenProps> {

  constructor(props: ScreenProps) {
    super(props);
  }

  render() {
    return (
      <View 
        style={styles.container} >

          <Image source={require('../assets/images/HomeScreen.png')} style={{
            width: 400, 
            height: 125,
            resizeMode: 'contain',
            marginBottom: 10,
            
            }} />

            

          <TouchableOpacity
            style={styles.button}
            onPress={_ => this.props.navigation.push('Join')}
            
          >
            <Text style={styles.text}>Join</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={_ => this.props.navigation.push('Create')}
            
          >
            <Text style={styles.text}>Create</Text>
          </TouchableOpacity>

          <Settings onClick={() => this.props.navigation.push('Settings')}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark.background
  },
  hamburger: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  sideBarParent: {
    alignItems: 'center'
  },
  logo: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  logoParent: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 65,
    height: 60
  },
  close: {
    position: 'absolute',
    top: 15,
    left: 15
  },
  closeParent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 60,
    height: 60
  },
  text: {
    fontFamily: 'Robban',
    fontSize: 40,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#DDDDDD',
    width: 250,
    height: 55,
    margin: 12.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  sidebarbutton: {
    backgroundColor: '#DDDDDD',
    width: 175,
    height: 55,
    marginTop: 25,
    padding: 0,
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center', 
    justifyContent: 'center'
  },
});