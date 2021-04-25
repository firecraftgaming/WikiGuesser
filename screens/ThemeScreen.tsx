import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Back from '../components/Back';
import Colors from '../constants/Colors';
import { ScreenProps } from '../types';

export default function ThemeScreen({
  navigation,
}: ScreenProps) {
  return (
    <View style={styles.container}>
      <Back onClick={() => navigation.pop()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark.background
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
  }
});
