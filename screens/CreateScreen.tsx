import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Back from '../components/Back';
import { FormObject, FormSwitch, FormRadio, RadioGroup, FormButton } from '../components/Form';
import { Hamburger, HamburgerButton, HamburgerMenuButton } from '../components/Hamburger';
import Colors from '../constants/Colors';

import { ScreenProps } from '../types';

let radio_group = new RadioGroup();

export default class CreateScreen extends Component<ScreenProps, {open: boolean, multiplayer: string | null}> {
  private hamburger: Hamburger | null = null;
  private navigation: any;
  
  constructor(props: ScreenProps) {
    super(props);
    this.navigation = props.navigation;
    this.state = {open: false, multiplayer: null};

    radio_group.listeners.push(this.onMultiplayerChange.bind(this));
  }

  onOpen() {
    this.setState({
      open: true,
      multiplayer: this.state.multiplayer
    });
  }

  onClose() {
    this.setState({
      open: false,
      multiplayer: this.state.multiplayer
    });
  }

  onMultiplayerChange() {
    this.setState({
      open: this.state.open,
      multiplayer: radio_group.value
    });
  }

  render() {
    let view = (
      <View style={styles.container}>
          <Back onClick={() => this.navigation.pop()}/>
          <HamburgerButton open={this.state.open} onClick={() => this.hamburger?.open()}/>

          <View style={styles.topView}>
            <FormObject title="Slow Mode">
              <FormSwitch></FormSwitch>
            </FormObject>

            <FormObject title="Local Multiplayer">
              <FormRadio group={radio_group} value="local"></FormRadio>
            </FormObject>
            <FormObject title="Online Multiplayer">
              <FormRadio group={radio_group} value="online"></FormRadio>
            </FormObject>

            {
              this.state.multiplayer == 'local' ? (
                <Text>Local</Text>
              ) : 
              this.state.multiplayer == 'online' ? (
                <Text>Online</Text>
              ) : null
            }
          </View>

          <View style={styles.bottomView}>
            <FormButton></FormButton>
          </View>
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
    justifyContent: 'space-between',
    backgroundColor: Colors.dark.background,

    width: '100%',
    height: '100%',
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
  },

  topView: {
    marginTop: 70,
  },

  bottomView: {
    marginBottom: 20,
  }
});
