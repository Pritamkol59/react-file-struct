import { Image, StyleSheet, Text, View,Platform } from 'react-native'
import { StatusBar } from 'react-native';

import React, { useEffect } from 'react';
import Icons from '../themes/Icons'
import normalize from 'react-native-normalize'
import Colors from '../themes/Colors'

const Home = () => {
   

    useEffect(() => {
       
        StatusBar.setBackgroundColor(Colors.white);
       
      
      }, []);

     
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})