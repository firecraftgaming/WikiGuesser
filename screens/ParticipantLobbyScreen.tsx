import * as React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Back from '../components/Back';
import Screen from '../components/Screen';
import { Crown } from '../components/images';
import { Hamburger, HamburgerButton, HamburgerMenuButton } from '../components/Hamburger';
import Colors from '../constants/Colors';

import { ScreenProps } from '../types';
import { get } from '../location';
import { RadioGroup } from '../components/Form';

import { socket } from '../socket';

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


export default class ParticipantLobbyScreen extends Screen<{}> {
    constructor(props: ScreenProps) {
        super(props);
        socket.emit('join', get('username'), get('code'));
        socket.on('error', (id, msg) => console.log(id, msg));
        socket.on('ready', (type, id) => console.log(type, id));
    }
    
    render()  {
        let view = (
            <View style={styles.container}>
                <Back onClick={() => this.navigation.pop()}/>
                <HamburgerButton open={this.state.open} onClick={() => this.hamburger?.open()}/>
                
                <View style={styles.topView}>
                    <Text style={styles.header}>{get('code')}</Text>
                    <FlatList
                      data={DATA}
                      renderItem={({item}) => (<Participant title={item.title}/>)}
                      keyExtractor={item => item.id}
                      key="participantlist"
                      style={styles.participantlist}
                      ItemSeparatorComponent={Separator}
                    />
                <Crown style={styles.crown}/>
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
                <HamburgerMenuButton onClick={() => this.navigation.push('HostLobby')} title="Host" />
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
  header: {
    fontSize: 65,
    color: "#C4C4C4",
    textAlign: "center",
    marginTop: 175,
    marginBottom: 30,
  },

  crown:  {
    
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
});
