import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Back from '../components/Back';
import { FormObject, FormSubmit } from '../components/Form';
import Settings from '../components/Settings';
import Colors from '../constants/Colors';

import { get, set } from '../location';
import { socket, request } from '../socket';

import { ScreenProps } from '../types';

export default class JoinScreen extends Component<ScreenProps, {valid: boolean, error: boolean}> {
  private user = '';
  private code = '';

  constructor(props: ScreenProps) {
    super(props);
    this.state = {valid: false, error: false};
  }

  onChange() {
    let valid = true;

    if (this.user == '') valid = false;
    if (this.code == '') valid = false;

    this.setState({
      error: false,
      valid
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
          <Back onClick={() => this.props.navigation.pop()}/>
          <Settings onClick={() => this.props.navigation.push('Settings')}/>
          
          <View style={styles.topView}>
            <Text style={styles.header}>Join</Text>
            <FormObject key="userInput">
              <TextInput placeholder="Username" placeholderTextColor="#C4C4C4" style={styles.textinput} onChangeText={v => {
                this.user = v;
                this.onChange();

                set('username', v);
              }}/>
            </FormObject>
            <FormObject title="Join Code" key="code" style={this.state.error ? {backgroundColor: 'red'} : {}}>
              <TextInput placeholder="Code" placeholderTextColor="#C4C4C4" keyboardType="number-pad" style={styles.textinput} onChangeText={v => {
                this.code = v;
                this.onChange();
                
                set('code', v);
              }}/>
            </FormObject>
          </View>

          <View style={styles.bottomView}>
            <FormSubmit active={this.state.valid} onClick={() => {
              request('join', get('username'), get('code')).then(v => {
                this.props.navigation.push('Lobby');
              }).catch(e => {
                console.log(e);
                this.setState({
                  error: true
                });
              });
              
            }}></FormSubmit>
          </View>
      </View>
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
