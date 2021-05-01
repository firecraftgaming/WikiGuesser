import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './navigation';
import { useFonts } from 'expo-font';


export default function App() {
  const [loaded] = useFonts({
    Robban: require('./assets/fonts/Roboto-Regular.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Navigation colorScheme={'dark'} />
      <StatusBar hidden />
    </SafeAreaProvider>
  );
}