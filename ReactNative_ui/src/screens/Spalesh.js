import { Image, StyleSheet, Text, View,Platform } from 'react-native'
import { StatusBar } from 'react-native';

import React, { useEffect } from 'react';
import Icons from '../themes/Icons'
import normalize from 'react-native-normalize'
import Colors from '../themes/Colors'

// Icons

const Spalesh = () => {

    // const {NavigationBarColor} = NativeModules;

    useEffect(() => {
        // changeNavigationBarColor();
        StatusBar.setBackgroundColor(Colors.drkblue);
        // setTimeout(() => {
        //     navigation.replace('Home');
        //   }, 5000);
      
      }, []);

      // const changeNavigationBarColor = (
      //   color = Colors.transparent,
      //   light = false,
      //   animated = true,
      // ) => {
      //   if (Platform.OS === 'android') {
      //     const LightNav = light ? true : false;
      //     NavigationBarColor.changeNavigationBarColor(color, LightNav, animated);
      //   }
      // };

  return (

    <View style={styles.contener}>
     <Image source={Icons.Splash} resizeMode="cover" style={styles.icn}/>
     <Text style={styles.txt}>Learn React-Native UI</Text>
    </View>
  )
}

export default Spalesh

const styles = StyleSheet.create({
    contener:{
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
        backgroundColor:Colors.drkblue,

    },
    icn:{
        height:normalize(180),
        width:normalize(180),
        marginBottom:normalize(25),
    },
    txt:{
        color:Colors.white,
        fontSize:normalize(25),
        fontWeight:'700',
    }
})