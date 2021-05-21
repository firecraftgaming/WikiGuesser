import * as React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { FormObject, FormRadio, RadioGroup, FormSubmit } from '../components/Form';
import Colors from '../constants/Colors';

import { ScreenProps } from '../types';

import { get, set } from '../location';
import { Component } from 'react';
import { request } from '../socket';
import { MainLayout } from '../components/MainLayout';
import { OnlineMultiplayerView } from '../components/OnlineMultiplayerView';
import { LocalMultiplayerView } from '../components/LocalMultiplayerView';


const DATA: string[] = [];

let radio_group = new RadioGroup();


export default class CreateScreen extends Component<ScreenProps, {multiplayer: string | null, valid: boolean}> {
  private list = React.createRef<FlatList>();

  constructor(props: ScreenProps) {
    super(props);
    set('username', '');
    this.state = {
      valid: false,
      multiplayer: null
    };
  }

  onChange() {
    let valid = true;

    switch (radio_group.value) {
      case 'local':
        if (DATA.length < 2) valid = false;
        break;
      case 'online':
        if (get('username').trim().length < 1) valid = false;
        break;
      default:
        valid = false;
        break;
    }

    this.setState({
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
      multiplayer: radio_group.value
    });
    this.onChange();
  }

  

  render() {
    return (
      <MainLayout back={true} settings={true} 
      bottom={
        <FormSubmit active={this.state.valid} onClick={() => {
          if (this.state.multiplayer == 'online') {
            request('create', get('username')).then(v => {
              set('code', v.code);
              this.props.navigation.push('Lobby')
            }).catch(e => console.error(e));
          } else {
            null
          }
        }}/>
      }
      >
        <View style={tw`w-full h-full flex flex-col justify-start items-center`}>
          <View style={tw`mb-4`}>
            <Text style={styles.title}>Create</Text>
            <FormObject title="Local Multiplayer">
              <FormRadio group={radio_group} value="local"></FormRadio>
            </FormObject>
            <FormObject title="Online Multiplayer">
              <FormRadio group={radio_group} value="online"></FormRadio>
            </FormObject>
          </View>
          {
            this.state.multiplayer == 'local' ? <LocalMultiplayerView DATA={DATA} onChange={() => this.onChange()}/> : 
            this.state.multiplayer == 'online' ? <OnlineMultiplayerView/>
            : null
          }
        </View>
      </MainLayout>
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
    backgroundColor: "#626262",
  },

  participantlist: {
    backgroundColor: "#626262",
    color: "#C4C4C4",

    height: 190,
    width: 315,

    paddingTop: 8,


    flexGrow: 0,
    alignSelf: 'center',
    borderRadius: 10,
  },
  
  participant: {
    height: 30,

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-between',
  },

  participantText: {
    lineHeight: 30,
    fontSize: 25,
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
