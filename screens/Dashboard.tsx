import { Entypo, FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppText from '../components/AppText';
import Match from '../components/Match';

import MatchCard from '../components/MatchCard';
import Nav from '../components/Nav';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

export default function Dashboard({ route, navigation } : RootTabScreenProps<'Dashboard'>) {
  const [opt, setOpt] = useState(false);
  return (
    <SafeAreaView style={[safeAreaStyles.container]}>
      <Nav opt={opt} setOpt={setOpt} />
      <ScrollView style={{ height: '100%', width: '100%' }}>
        <View
          style={[safeAreaStyles.container]}
        >
          {opt ?
            <MatchCard route={route} navigation={navigation}/> :
            <View style={{ marginTop: '12%', width: '80%' }}>

              <AppText 
                color={Colors.dark.text}
                size={35}
                text="Your match will arrive on 3/8"
                title={true}
                center
              />
            </View>
          } 
        </View>
        <StatusBar />
      </ScrollView>
    </SafeAreaView>
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