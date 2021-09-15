import React from 'react';

import Details from '../screens/Details';
import { TabNavigator } from './TabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator();


export const StackNavigator = () =>{
  return(
    <Stack.Navigator initialRouteName = "TabNavigator">
    <Stack.Screen name = "TabNavigator" component = {TabNavigator} options = {{headerShown:false}} />
    <Stack.Screen name = "Details" component = {Details} options = {{headerShown:false}} />
  </Stack.Navigator>
  )
}


// const styles = StyleSheet.create({
//     tabBar:{
//       backgroundColor:colors.white,
//       borderTopRightRadius:20,
//       borderTopLeftRadius:20
  
//     }
//   });