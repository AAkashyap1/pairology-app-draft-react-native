import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppText from '../components/AppText';
import Match from '../components/Match';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

export default function Dashboard({ route, navigation } : RootTabScreenProps<'Dashboard'>) {
  
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
          <View style={{ width: '85%' }}>
            <View style={{ alignItems: 'center' }} >
              <AppText 
                title={true}
                size={30}
                text={'Your Match'}
                color={Colors.dark.text}
              />
            </View>
            <Match 
              name='Rafael Basto'
              email='rbasto19@stanford.edu'
              bio='Physics, running, swimming, climbing, outdoors!'
              onPress={() => navigation.navigate('Messages')}
            />
            <View style={{ marginTop: '10%', alignItems: 'center' }} >
              <AppText 
                title={true}
                size={30}
                text={'Previous Matches'}
                color={Colors.dark.text}
              />
            </View>
            <Match 
              name='Ananth Kashyap'
              email='ananthkashyap4@gmail.com'
              bio='Boom boom boom booom boooooom'
              onPress={() => navigation.navigate('Messages')}
            />
            <Match 
              name='Henry Weng'
              email='henryweng03@gmail.com'
              bio='Boom boom boom booom boooooom'
              onPress={() => navigation.navigate('Messages')}
            />
            <Match 
              name='Ananth Kashyap'
              email='ananthkashyap4@gmail.com'
              bio='Boom boom boom booom boooooom'
              onPress={() => navigation.navigate('Messages')}
            />
            <Match 
              name='Henry Weng'
              email='henryweng03@gmail.com'
              bio='Boom boom boom booom boooooom'
              onPress={() => navigation.navigate('Messages')}
            />
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