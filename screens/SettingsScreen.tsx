import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Button } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';

export default function SettingsScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Settings'>) {
  return (
    <View style={styles.container}>
      <Button title="Home" onPress={_ => navigation.pop()}></Button>
      <Text style={styles.title}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
