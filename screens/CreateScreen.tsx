import * as React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Back from '../components/Back';
import Plus from '../components/Plus';
import { FormObject, FormSwitch, FormRadio, RadioGroup, FormSubmit } from '../components/Form';
import { Hamburger, HamburgerButton, HamburgerMenuButton } from '../components/Hamburger';
import Colors from '../constants/Colors';

import fetch from 'node-fetch';

import Screen from '../components/Screen';
import { ScreenProps } from '../types';

import { get, set } from '../location';


const DATA = [
  {
    id: '0',
    title: 'Aron',
  },
  {
    id: '1',
    title: 'Eliyah',
  },
  {
    id: '2',
    title: 'Bob',
  },
  {
    id: '3',
    title: 'Billy',
  },
  {
    id: '4',
    title: 'Bengt',
  },
  {
    id: '5',
    title: 'Bob',
  },
  {
    id: '6',
    title: 'Billy',
  },
  {
    id: '7',
    title: 'Bengt',
  },
];

let radio_group = new RadioGroup();

class Participant extends React.Component<{title: string}, {}> {
  constructor(props: {title: string}) {
    super(props);
  }

  render() {
    return (
      <Text style={styles.participant}>{this.props.title}</Text>
    );
  }
}

class Separator extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <View style={styles.separator}></View>
    );
  }
}

export default class CreateScreen extends Screen<{multiplayer: string | null, valid: boolean}> {
  private code: string = '';
  
  constructor(props: ScreenProps) {
    super(props, {valid: true});

    fetch('https://backend.wikiguesser.repl.co/code').then(v => v.json()).then(v => this.code = v.data);
  }

  onChange() {
    let valid = true;



    this.setState({
      ...this.state,
      valid
    });
  }

  componentDidMount() {
    radio_group.listeners.set('update-screen', this.onMultiplayerChange.bind(this));
  }

  componentWillUnmount() {
    radio_group.listeners.delete('update-screen');
  }

  onMultiplayerChange() {
    this.setState({
      ...this.state,
      multiplayer: radio_group.value
    });
    //this.onChange();
  }

  

  render() {
    let view = (
      <View style={styles.container}>
          <Back onClick={() => this.navigation.pop()}/>
          <HamburgerButton open={this.state.open} onClick={() => this.hamburger?.open()}/>

          <View style={styles.topView}>
            {
              <Text style={styles.title}>Create</Text>
              /*
                <FormObject title="Slow Mode" style={styles.bottomView}>
                  <FormSwitch></FormSwitch>
                </FormObject>
              */
            }
            <FormObject title="Local Multiplayer">
              <FormRadio group={radio_group} value="local"></FormRadio>
            </FormObject>
            <FormObject title="Online Multiplayer" style={styles.bottomView}>
              <FormRadio group={radio_group} value="online"></FormRadio>
            </FormObject>



            {
              this.state.multiplayer == 'local' ? [
                <FormObject key="add-participant">
                  <TextInput placeholder="Participant" placeholderTextColor="#C4C4C4" style={styles.participantinput}/>
                  <Plus onClick={() => null}/>
                </FormObject>,
                <FlatList
                  data={DATA}
                  renderItem={({item}) => (<Participant title={item.title}/>)}
                  keyExtractor={item => item.id}
                  key="participantlist"
                  style={styles.participantlist}
                  ItemSeparatorComponent={Separator}
                />
               ] : 
              this.state.multiplayer == 'online' ? (
                <FormObject key="userInput">
                  <TextInput placeholder="Username" onChangeText={v => set('username', v)} placeholderTextColor="#C4C4C4" style={styles.usernameinput}/>
                </FormObject>
              ) : null
            }
          </View>

          <View style={styles.bottomView}>
            <FormSubmit active={this.state.valid} onClick={() => this.navigation.push('HostLobby')}></FormSubmit>
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
    color: "#C4C4C4",
    fontSize: 65,
    textAlign: "center",
    fontWeight: 'bold',
    marginBottom: 10,
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
    marginTop: 100,
  },

  bottomView: {
    marginBottom: 20,
    alignItems: 'center',
  },

  usernameinput: {
    borderRadius: 8,

    width: 305,
    height: 40,

    paddingLeft: 10,
    fontSize: 23,
    color: '#C4C4C4',

    margin: 5,
    backgroundColor: "#626262",
  },

  participantinput: {
    borderRadius: 8,

    width: 265,
    height: 40,

    paddingLeft: 10,
    fontSize: 23,
    color: '#C4C4C4',

    margin: 45,
    backgroundColor: "#626262"
  },

  participantlist: {
    backgroundColor: "#626262",
    color: "#C4C4C4",

    height: 190,
    width: 315,

    paddingTop: 8,

    flexGrow: 0,
    alignSelf: 'center',
    borderRadius: 10
  },
  
  participant: {
    fontSize: 23,
    color: "#C4C4C4",
    paddingLeft: 10,
  },

  separator: {
    width: 315,
    height: 2,
    backgroundColor: "#C4C4C4",
    marginTop: 8,
    marginBottom: 8,
  },

  code: {
    fontFamily: 'Robban',
    fontSize: 30,
    marginRight: 10,
  },
});
