import * as React from 'react';
import { StyleSheet, View, Text, Alert, BackHandler, NativeEventSubscription } from 'react-native';
import Back from '../components/Back';
import { Crown } from '../components/images';
import Colors from '../constants/Colors';

import { ScreenProps } from '../types';
import { get } from '../location';

import { socket } from '../socket';
import Settings from '../components/Settings';
import { Component } from 'react';
import { Player, PlayerList } from '../components/Participant';



export default class ParticipantLobbyScreen extends Component<ScreenProps> {
  public players: Player[] = [];
  private backHandler: NativeEventSubscription | undefined;

  constructor(props: ScreenProps) {
      super(props);

      socket.emit('player-list');
      socket.on('player-list', players => {
        this.players = players;
        this.forceUpdate();
      });

      const backAction = () => {
        this.showAlert();
        return true;
      };
  
      this.backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        this.showAlert.bind(this)
      );
  }

  showAlert() {
    Alert.alert(
      "Leave",
      "Are you sure you want to leave?",
      [
        {
          text: "No",
          style: "cancel"
        },
        { 
          text: "Yes", 
          onPress: () => {
            socket.emit('reset');
            this.props.navigation.pop();
            this.backHandler?.remove();
          } 
        }
      ]
    )
    return true;
  }
  
  render()  {
    return (
      <View style={styles.container}>
        <Back onClick={() => this.showAlert()}/>
        <Settings onClick={() => this.props.navigation.push('Settings')}/>
        
        <View style={styles.topView}>
          <Text style={styles.header}>{get('code')}</Text>
          <PlayerList
            DATA={this.players}
            nameExtractor={item => item.name}
          />
        <Crown style={styles.crown}/>
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
