import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppText from '../components/AppText';
import Chat from '../components/Chat';
import Match from '../components/Match';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

export default function Dashboard({ route, navigation } : RootTabScreenProps<'Chat'>) {
  
  return (
    <SafeAreaView style={[safeAreaStyles.container]}>
      <View style={{ width: '85%', alignItems: "flex-end" }} >
        <TouchableOpacity>
          <FontAwesome
            name="cog"
            color="black"
            size={30}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ height: '85%', width: '100%', marginTop: '2%', }}>
        <View
          style={[safeAreaStyles.container]}
        >
          <View style={{ alignItems: 'center' }} >
            <AppText 
              title={true}
              size={30}
              text={'Messages'}
              color={Colors.dark.text}
            />
          </View>
          <View style={{ width: '100%', marginTop: '6%', }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <Chat 
                key={num}
                name='Rafael Basto'
                email='rbasto19@stanford.edu'
                lastMessage='Hey whats up dude long time no talk.'
                onPress={() => navigation.navigate('Chat')}
              />
            ))}
          </View>
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
    marginTop: '6%',
    backgroundColor: "lavender",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    borderRadius: 8,
  },
  text: {
    marginTop: '2%'
  }, 
  button: {
    borderRadius: 8,
    backgroundColor: Colors.lightPurple.text,
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  }
})

