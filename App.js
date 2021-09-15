import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading'

//Fonts
import { useFonts,Lato_400Regular,Lato_700Bold } from '@expo-google-fonts/lato';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './Stacks/StackNavigator';

export default function App() {

  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading />
  }
  return (

    <NavigationContainer>
      <StackNavigator />

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


