import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Back from '../components/Back';
import Settings from '../components/Settings';
import Colors from '../constants/Colors';

import { ScreenProps } from '../types';

export default class Screen extends Component<ScreenProps> {
  constructor(props: ScreenProps) {
    super(props);
  }

  render()  {
    return (
      <View style={styles.container}>
          <Back onClick={() => this.props.navigation.pop()}/>
          <Settings onClick={() => this.props.navigation.push('Settings')}/>
      </View>
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
