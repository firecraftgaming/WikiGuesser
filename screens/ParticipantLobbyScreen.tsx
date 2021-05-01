import * as React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Back from '../components/Back';
import Screen from '../components/Screen';
import { Crown } from '../components/images';
import { Hamburger, HamburgerButton, HamburgerMenuButton } from '../components/Hamburger';
import Colors from '../constants/Colors';

import { ScreenProps } from '../types';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Aron',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Eliyah',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Billy',
    },
  ];


export default class ParticipantLobbyScreen extends Screen<{code: string}> {
    constructor(props: ScreenProps) {
        super(props, {code: ''});
        fetch('https://backend.wikiguesser.repl.co/code').then(v => v.json()).then(v => this.setState({...this.state, code: v.data}));
    }
    
    render()  {
        let view = (
            <View style={styles.container}>
                <Back onClick={() => this.navigation.pop()}/>
                <HamburgerButton open={this.state.open} onClick={() => this.hamburger?.open()}/>
                
                <View style={styles.topView}>
                    <Text style={styles.header}>{this.state.code}</Text>
                    <FlatList
                  data={DATA}
                  renderItem={null}
                  keyExtractor={item => item.id}
                  key="participantlist"
                  style={styles.participantlist}
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
  participantlist: {
    backgroundColor: "#626262",
    color: "#C4C4C4",

    height: 190,
    width: 315,

    flexGrow: 0,
    alignSelf: 'center',
    borderRadius: 10
  },
  crown:  {
    
  }
});
