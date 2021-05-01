import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Back from '../components/Back';
import Colors from '../constants/Colors';
import Screen from '../components/Screen';

import { ScreenProps } from '../types';
import { HamburgerButton, Hamburger, HamburgerMenuButton } from '../components/Hamburger';

export default class JoinScreen extends Screen {
  constructor(props: ScreenProps) {
    super(props);
  }

  render()  {
    let view = (
      <View style={styles.container}>
          <Back onClick={() => this.navigation.pop()}/>
          <HamburgerButton open={this.state.open} onClick={() => this.hamburger?.open()}/>
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
  }
});
