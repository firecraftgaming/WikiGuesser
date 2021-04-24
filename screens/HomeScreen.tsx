import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { Button, StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { RootStackParamList } from '../types';

export default function HomeScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Home'>) {
  return (
    <View style={styles.container}>
      <Button title="Hello!" onPress={_ => navigation.push('Settings')}></Button>
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
