import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Back from '../components/Back';
import Colors from '../constants/Colors';

import { ScreenProps } from '../types';

export default class SettingsScreen extends Component<ScreenProps> {
  constructor(props: ScreenProps) {
    super(props);
  }

  render()  {
    return (
      <View style={styles.container}>
          <Back onClick={() => this.props.navigation.pop()}/>
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
