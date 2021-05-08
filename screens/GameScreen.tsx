import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Back from '../components/Back';
import Settings from '../components/Settings';
import Colors from '../constants/Colors';

import { WebView } from 'react-native-webview';

import { ScreenProps } from '../types';

export default class Screen extends Component<ScreenProps> {
  constructor(props: ScreenProps) {
    super(props);
  }

  render()  {
    return (
        /*
      <View style={styles.container}>
            <Back onClick={() => this.props.navigation.pop()}/>
            <Settings onClick={() => this.props.navigation.push('Settings')}/>
            <Text>Test</Text>
      </View>
      */
      <WebView 
      source={{uri: 'https://sv.wikipedia.org/wiki/Coca-Cola'}}
      style={{width: '100%', height: '100%'}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark.background
  }
});
