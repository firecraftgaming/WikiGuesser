import * as React from 'react';
import { StyleSheet, View, Text, Alert, BackHandler, NativeEventSubscription } from 'react-native';
import Back from '../components/Back';
import Colors from '../constants/Colors';

import { ScreenProps } from '../types';
import { FormObject, FormSubmit } from '../components/Form';
import { get } from '../location';
import { socket, request } from '../socket';
import { Player, PlayerList } from '../components/Participant';
import { Component } from 'react';
import Settings from '../components/Settings';

export default class HostLobbyScreen extends Component<ScreenProps, {code: string, isHost: boolean}> {
    public players: Player[] = [];
    private backHandler: NativeEventSubscription | undefined;

    constructor(props: ScreenProps) {
        super(props);
        this.state = {code: '', isHost: false};

        socket.emit('request-update');

        socket.on('player-list', players => {
          this.players = players;
          this.forceUpdate();
        });

        socket.on('host-change', id => {
            this.setState({
                isHost: id < 0,
            });
        });

        this.backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
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
                this.backHandler = undefined;
              } 
            }
          ]
        )
        return true;
      }

    kick(index: number) {
      //TODO: Send id to server for kick
    }
    
    render()  {
        return (
            <View style={styles.container}>
                <Back onClick={this.showAlert.bind(this)}/>
                <Settings onClick={() => this.props.navigation.push('Settings')}/>
                <View style={styles.topView}></View>
                
                <View style={styles.centerView}>
                    <Text style={styles.header}>{get('code')}</Text>
                    <PlayerList
                      DATA={this.players}
                      removable={this.state.isHost}
                      removeCallback={this.kick.bind(this)}
                      nameExtractor={item => item.name}
                    />
                </View>
                
                <View style={styles.bottomView}>
                    {this.state.isHost ? <FormSubmit active={true} onClick={() => null}></FormSubmit> : null}
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

    topView: {
        marginTop: 20,
        height: 50,
        width: '100%',
    },
    centerView: {
        marginBottom: 70,
    },
    bottomView: {
        marginBottom: 40,
        height: 50,
        width: '100%',

        alignItems: 'center',
    },

    header: {
        height: 70,
        fontSize: 65,
        color: "#C4C4C4",
        textAlign: 'center',

        marginBottom: 20,
    }
});

/*
const styles = StyleSheet.create({
    
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
  */