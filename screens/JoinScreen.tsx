import * as React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Back from '../components/Back';
import { FormObject, FormSubmit } from '../components/Form';
import { Hamburger, HamburgerButton, HamburgerMenuButton } from '../components/Hamburger';
import Colors from '../constants/Colors';
import Screen from '../components/Screen';

import { get, set } from '../location';

import { ScreenProps } from '../types';

export default class JoinScreen extends Screen<{valid: boolean}> {
  private user = '';
  private code = '';

  constructor(props: ScreenProps) {
    super(props, {valid: false});
  }

  onChange() {
    let valid = true;

    if (this.user == '') valid = false;
    if (this.code == '') valid = false;

    this.setState({
      ...this.state,
      valid
    });
  }
  
  render()  {
    let view = (
      <View style={styles.container}>
          <Back onClick={() => this.navigation.pop()}/>
          <HamburgerButton open={this.state.open} onClick={() => this.hamburger?.open()}/>
          
          <View style={styles.topView}>
            <Text style={styles.header}>Join</Text>
            <FormObject key="userInput">
              <TextInput placeholder="Username" placeholderTextColor="#C4C4C4" style={styles.textinput} onChangeText={v => {
                this.user = v;
                this.onChange();

                set('username', v);
              }}/>
            </FormObject>
            <FormObject title="Join Code" key="code">
              <TextInput placeholder="Code" placeholderTextColor="#C4C4C4" keyboardType="number-pad" style={styles.textinput} onChangeText={v => {
                this.code = v;
                this.onChange();
                
                set('code', v);
              }}/>
            </FormObject>
          </View>

          <View style={styles.bottomView}>
            <FormSubmit active={this.state.valid} onClick={() => this.navigation.push('ParticipantLobby')}></FormSubmit>
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
  },
  header: {
    fontSize: 65,
    color: "#C4C4C4",
    textAlign: "center",
    marginTop: 175,
  },
  textinput: {
    borderRadius: 8,

    width: 305,
    height: 40,

    paddingLeft: 10,
    fontSize: 23,
    color: '#C4C4C4',

    margin: 5,
    backgroundColor: "#626262",
  },
});
