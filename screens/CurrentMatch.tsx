import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppText from '../components/AppText';


import MatchCard from '../components/MatchCard';
import Nav from '../components/Nav';
import Colors from '../constants/Colors';
import { useOpt } from '../hooks/useOpt';
import { RootTabScreenProps } from '../types';

export default function CurrentMatch({ route, navigation } : RootTabScreenProps<'Current Match'>) {
  const { opt } = useOpt()
  return (
    <View style={[safeAreaStyles.container, { paddingTop: '11%' }]}>
      <Nav/>
      <ScrollView style={{ width: '100%' }}>
        <View
          style={[safeAreaStyles.container]}
        >
          {opt ?
            <MatchCard external={true} navigation={navigation}/> :
            <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
              <View style={{ marginTop: '12%', width: '80%' }}>
                <AppText 
                  color={Colors.dark.text}
                  size={35}
                  text="Your match will arrive on 3/8"
                  title={true}
                  center
                />
              </View>
              <View style={{ width: '80%', marginTop: '5%', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <View style={{ width: '100%' }}>
                <Image 
                  source={require("../assets/images/clipboard.png")}
                  style={{ width: '100%', height: undefined, aspectRatio: 1/1 }}
                />
                </View>
              </View>
            </View>
          } 
        </View>
        <StatusBar />
      </ScrollView>
    </View>
  );
}

const safeAreaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: '100%', 
    height: '100%',
  }
})

const match = StyleSheet.create({
  container: {
    backgroundColor: "lavender",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingVertical: '8%',
    paddingHorizontal: '10%',
    borderRadius: 30,
  },
  text: {
    marginTop: '2%'
  }, 
  button: {
    borderRadius: 8,
    backgroundColor: Colors.lightPurple.text,
    width: '80%',
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  }
})