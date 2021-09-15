import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home/Home';
import Liked from '../screens/Liked';
import Profile from '../screens/Profile';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../assets/colors/colors'

const Tab = createBottomTabNavigator();

export const TabNavigator = () =>{
  return(
    <Tab.Navigator 
      screenOptions = {{
        headerShown:false,
        tabBarActiveTintColor:colors.orange,
        tabBarInactiveTintColor:colors.gray,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel:false
      }}
    >
      <Tab.Screen 
        name = "Home" 
        component = {Home} 
        options = {{
          tabBarIcon: ({color}) => <MaterialIcons name = "home"  size = {32} color = {color} />
        }} 
      />
      <Tab.Screen 
        name = "Liked" 
        component = {Liked} 
        options = {{
          tabBarIcon: ({color}) => <MaterialIcons name = "favorite"  size = {32} color = {color} />
        }}       
      />
      <Tab.Screen  
        name = "Profile" 
        component = {Profile} 
        options = {{
          tabBarIcon: ({color}) => <MaterialIcons name = "person"  size = {32} color = {color} />
        }}       
      />
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
    tabBar:{
      backgroundColor:colors.white,
      borderTopRightRadius:20,
      borderTopLeftRadius:20
    }
  });