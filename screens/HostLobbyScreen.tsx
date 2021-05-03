import * as React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import Back from '../components/Back';
import Colors from '../constants/Colors';

import { ScreenProps } from '../types';
import { FormObject, FormSubmit } from '../components/Form';
import { get } from '../location';
import { socket, request } from '../socket';
import { Player, PlayerList } from '../components/Participant';
import { Component } from 'react';
import Settings from '../components/Settings';

export default class HostLobbyScreen extends Component<ScreenProps, {code: string}> {
    public players: Player[] = [];

    constructor(props: ScreenProps) {
        super(props);
        this.state = {code: ''};

        socket.on('player-list', players => {
          this.players = players;
          this.forceUpdate();
        });

        request('create', get('username')).then(v => {
          this.setState({
            ...this.state, 
            code: v.code
          });
        }).catch(e => console.error(e));
    }

    kick(index: number) {
      //TODO: Send id to server for kick
    }
    
    render()  {
        return (
            <View style={styles.container}>
                <Back onClick={() => Alert.alert(
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
                      } 
                    }
                  ]
                )}/>
                <Settings onClick={() => this.props.navigation.push('Settings')}/>
                <View></View>
                
                <View>
                    <Text style={styles.header}>{this.state.code}</Text>
                    <PlayerList
                      DATA={this.players}
                      removable={true}
                      removeCallback={this.kick.bind(this)}
                      nameExtractor={item => item.name}
                    />
                </View>
                
                <View style={styles.bottomView}>
                    <FormSubmit active={true} onClick={() => null}></FormSubmit>
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
    marginTop: 70,
  },
  bottomView: {
    marginBottom: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 65,
    color: "#C4C4C4",
    textAlign: "center",
    marginTop: 175,
    marginBottom: 30,
  },
});
