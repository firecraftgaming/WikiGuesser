import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Back from '../components/Back';
import { Hamburger, HamburgerButton, HamburgerMenuButton } from '../components/Hamburger';
import Colors from '../constants/Colors';

import { ScreenProps } from '../types';

export default class CreateScreen extends Component<ScreenProps, {}> {
  private hamburger: Hamburger | null = null;
  private navigation: any;
  
  constructor(props: ScreenProps) {
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
    let view = (
      <View style={styles.container}>
          <Back onClick={() => this.navigation.pop()}/>
          <HamburgerButton open={this.hamburger?.state?.open} onClick={() => this.hamburger?.open()}/>
      </View>
    );
    return (
      <Hamburger
        ref={ref => this.hamburger = ref}
        onClose={this.onClose.bind(this)}
        onOpen={this.onOpen.bind(this)}
        view={view}>
          <HamburgerMenuButton onClick={() => this.navigation.push('Settings')} title="Settings" />
          <HamburgerMenuButton onClick={() => this.navigation.push('Theme')} title="Theme" />
          <HamburgerMenuButton onClick={() => this.navigation.push('Language')} title="Language" />
          <HamburgerMenuButton onClick={() => this.navigation.push('Change')} title="Change Log" />
      </Hamburger>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  back: {
    position: 'absolute',
    top: 0,
    left: 0,

    width: 60,
    height: 60,

    alignItems: 'center',
    justifyContent: 'center'
  }
});
