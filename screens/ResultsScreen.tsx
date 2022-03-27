import { Octicons, FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import React, { useContext, useState } from 'react';
import AppText from '../components/AppText';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';
import InputDropdown from '../components/InputDropdown';
import { universities } from '../data/universities';
import { useData } from '../hooks/useData';
import { interestedForm } from '../constants/Forms';

export default function CreateAccount({ navigation } : RootTabScreenProps<'Account'>) {
  return (
    <SafeAreaProvider style={safeAreaStyles.container}>
      <View style={imageStyles.container}>
        <Image 
          style={imageStyles.image} 
          source={require("../assets/images/pairology.png")} 
        />
      </View>
      <View style={createAccountStyles.container}>
        <AppText 
          text={'Results'}
          size={30}
          color={Colors.dark.text}
          title
        />
      </View>
      <View style={lineStyles.container} />
      <StatusBar />
    </SafeAreaProvider>
  );
}


const modalSelectStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 15,
    marginTop: '12%', 
    marginBottom: '10%',
    borderRadius: 8,
  }
})

const lineStyles = StyleSheet.create({
  container: {
    width: "80%",
    height: 1,
    backgroundColor: "black",
  }
})

const createAccountStyles = StyleSheet.create({
  container: {
    marginBottom: '5%',
  }
})

const imageStyles = StyleSheet.create({
  container: {
    marginTop: '-5%',
    width: '80%%',
    height: '9.5%',
    marginBottom: '11%',
    alignItems: 'center',
  }, 
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }
})

const googleButtonStyles = StyleSheet.create({
  container: {
    width: "80%",
    height: "8%",
    flexDirection: "row",
    backgroundColor: "#7667DD",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  }
})

const safeAreaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  }
})