import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import MessageTab from '../components/MessageTab';
import Nav from '../components/Nav';
import { RootTabScreenProps } from '../types';

export default function Dashboard({ navigation } : RootTabScreenProps<'Messages'>) {
  return (
    <View style={[safeAreaStyles.container, { paddingTop: '11%' }]}>
      <Nav />
      <ScrollView style={{ width: '100%' }}>
        <View
          style={[safeAreaStyles.container]}
        >
          <View style={{ width: '100%', height: '100%' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <MessageTab 
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
