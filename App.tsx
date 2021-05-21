import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

import screens from './screens/screens';

const Stack = createStackNavigator();
function Screen() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false}}>
        {
          [...screens.keys()].map((v, i) => (
            <Stack.Screen name={v} component={screens.get(v)} key={i}/>
          ))
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const [loaded] = useFonts({
    Robban: require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Screen/>
      <StatusBar hidden />
    </SafeAreaProvider>
  );
}