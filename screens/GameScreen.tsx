import * as React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import { MainLayout } from '../components/MainLayout';
import tw from 'tailwind-react-native-classnames';

import { ScreenProps } from '../types';

export default class Screen extends Component<ScreenProps> {
  constructor(props: ScreenProps) {
    super(props);
  }

  render()  {
    return (
      <MainLayout 
      back={true} 
      settings={true} 
      top={
        <View style={[tw`w-full h-full`, {backgroundColor: '#ff0000'}]}></View>
      }
      bottom={
        <View style={[tw`w-full h-full`, {backgroundColor: '#00ff00'}]}></View>
      }
      >
        <View style={[tw`w-full h-full`, {backgroundColor: '#0000ff'}]}></View>
      </MainLayout>
    );
  }
}