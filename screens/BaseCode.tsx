import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import Colors from '../constants/Colors';

import { RootStackParamList } from '../types';

export default function CHANGE_THIS_Screen({
  navigation,
}: StackScreenProps<RootStackParamList, 'CHANGE_THIS'>) {
  return (
    <View style={styles.container}>
      <Button title="CHANGE THIS" onPress={_ => navigation.pop()}></Button>
      <Text style={styles.title}>CHANGE THIS</Text>
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
});
