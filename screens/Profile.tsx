import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';


import MatchCard from '../components/MatchCard';
import Nav from '../components/Nav';
import Colors from '../constants/Colors';
import { useOpt } from '../hooks/useOpt';
import { RootTabScreenProps } from '../types';

export default function Profile({ route, navigation } : RootTabScreenProps<'Profile'>) {
  const { opt } = useOpt()
  return (
    <View style={[safeAreaStyles.container, { paddingTop: '11%' }]}>
      <Nav/>
      <ScrollView style={{ width: '100%' }}>
        <View
          style={[safeAreaStyles.container]}
        >
          <MatchCard external={false} navigation={navigation}/>
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