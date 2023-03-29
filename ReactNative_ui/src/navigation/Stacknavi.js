import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react'
import Spalesh from '../screens/Spalesh'
import Home from '../screens/Home';

// Spalesh
const Stacknavi = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
         <Stack.Navigator
          initialRouteName="Spalesh"
          screenOptions={{headerShown: false}}>
               <Stack.Screen name="Spalesh" component={Spalesh} />
               <Stack.Screen name="Home" component={Home} />

        </Stack.Navigator>

        </NavigationContainer>
  )
}

export default Stacknavi