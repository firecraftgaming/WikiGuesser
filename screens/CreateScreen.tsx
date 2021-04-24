import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

import { RootStackParamList } from '../types';

export default function CreateScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Create'>) {
  return (
    <View style={styles.container}>
        <TouchableOpacity
            style={styles.back}
            onPress={_ => navigation.pop()}
            >
            <Image
                source={require('../Back.png')} />
        </TouchableOpacity>
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
