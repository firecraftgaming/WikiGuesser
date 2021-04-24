import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { Button, StyleSheet, Image, TouchableOpacity, View, Text, Alert } from 'react-native';
import Colors from '../constants/Colors';
import Drawer from 'react-native-drawer';

import { RootStackParamList } from '../types';
import { Component } from 'react';
import { Hamburger } from '../components/Hamburger';

export default class HomeScreen extends Component<StackScreenProps<RootStackParamList, 'Home'>, {open: boolean}> {

  private hamburger: Hamburger | null = null;
  private navigation: any;
  
  constructor(props: StackScreenProps<RootStackParamList, 'Home'>) {
    super(props);
    this.navigation = props.navigation;
    this.state = {open: false};
  }

  onOpen() {
    this.setState({
        open: true
    });
  }

  onClose() {
      this.setState({
          open: false
      });
  }

  render() {
    return (
      <Hamburger 
      ref={(ref) => {
        this.hamburger = ref;
      }}
      onClose={this.onClose.bind(this)}
      onOpen={this.onOpen.bind(this)}
      view={
        <View 
        style={styles.container} >
          
          <TouchableOpacity
            style={styles.button}
            onPress={_ => this.navigation.push('Join')}
            
          >
            <Text style={styles.text}>Join</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={_ => this.navigation.push('Create')}
            
          >
            <Text style={styles.text}>Create</Text>
          </TouchableOpacity>
          <TouchableOpacity
                    onPress={_ => this.hamburger?.open()}
                    style={styles.logoParent}
                >
                    <Image
                    style={{...styles.logo, display: this.hamburger?.state.open ? 'none' : 'flex'}}
                    source={require('../Hamburger.png')}/>
                </TouchableOpacity>
        </View>
      }></Hamburger>
    );
  }
}

const DrawerStyles = {
  drawer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRightWidth: 2,
    borderColor: 'rgba(34, 34, 34, 1)',
    shadowColor: '#000',
    shadowOpacity: 0.58,
    shadowOffset: {
      width: 5,
      height: 0
    }
  },
  main: {

  }
};

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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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