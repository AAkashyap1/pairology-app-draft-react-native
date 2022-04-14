import { Entypo, FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import AppText from '../components/AppText';
import List from '../components/List';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

type Props = {
  external: boolean,
  navigation: RootTabScreenProps<'Current Match' | 'Profile'>["navigation"]
}

export default function MatchCard({ external, navigation }: Props) {
  
  return (
    <View style={{ width: '86%' }}>
      <View style={match.container} >
        <View 
          style={{ 
            flexDirection: "row", 
            justifyContent: "space-between", 
            alignItems: "center",
            width: '100%',
          }}
        >
          <AppText 
            title={true}
            size={28}
            text={external ? "Ananth Kashyap" : 'My Profile'}
            color={Colors.dark.text}
          />
          {external ?
            <TouchableOpacity 
              onPress={() => navigation.navigate('Chat')}
              style={{ borderRadius: 1000, padding: '2%', backgroundColor: Colors.lightPurple.text }}
            >
              <Entypo 
                name="message"
                color="white"
                size={22}
              />
            </TouchableOpacity> : 
            <TouchableOpacity 
              style={{ borderRadius: 1000, padding: '2%', backgroundColor: Colors.lightPurple.text }}
            >
              <FontAwesome 
                name="pencil"
                color="white"
                size={22}
              />
            </TouchableOpacity>
          }
        </View>
        <View 
          style={{ 
            flexDirection: "row", 
            alignItems: "center",
            marginTop: '2%',
            width: '100%',
          }}
        >
          <View style={{ marginRight: '3%', width: '8%' }}>
            <FontAwesome 
              name="user"
              color={Colors.dark.text}
              size={23}
            />
          </View>
          <AppText 
            title={false}
            size={18}
            text="he/him"
            color={Colors.dark.text}
            bold
          />
        </View>
        <View 
          style={{ 
            flexDirection: "row", 
            alignItems: "center",
            marginTop: '1.5%',
            width: '100%',
          }}
        >
          <View style={{ marginRight: '3%', width: '8%' }}>
            <Entypo 
              name="graduation-cap"
              color={Colors.dark.text}
              size={21}
            />
          </View>
          <AppText 
            title={false}
            size={18}
            text="Stanford University"
            color={Colors.dark.text}
            bold
          />
        </View>
        <View style={{ marginTop: '7%' }}>
          <AppText 
            title={true}
            size={24}
            color={Colors.dark.text}
            text="Bio"
          />
          <View style={{ marginTop: '1%' }}>
            <AppText 
              text="This is my bio Lorem ipsum dolor sit amet, consectetur, adipiscing elit, sed do eiusmod tempor incidunt"
              size={16}
              color={Colors.dark.text}
              title={false}
            />
          </View>
        </View>
        <List 
          title="Interests"
          items={['Interest 1', 'Interest 2', 'Interest 3', 'Interest 4']}
        />
        <List 
          title={`Traits ${external ? 'you share' : ''}`}
          items={['Happiness', 'Curiosity', 'Dedication']}
        />
        {external && 
        <View 
          style={{ 
            flexDirection: "row", 
            alignItems: "center",
            marginTop: '7%',
            width: '100%',
          }}
        >
          <AppText 
            title={false}
            size={24}
            text="Compatability Score"
            color={Colors.dark.text}
            bold
          />
          <View style={{ marginLeft: '5%' }}>
            <FontAwesome 
              name="lock"
              color={Colors.dark.text}
              size={28}
            />
          </View>
        </View>}
        {external && 
        <View style={{ marginTop: '5%', width: '100%', alignItems: 'center' }}>
          <TouchableOpacity 
            style={match.button} 
            onPress={() => console.log('')}
          >
            <AppText 
              text={`Say hi!`}
              size={17}
              color="white"
              title={false}
              bold
            />
            <Entypo
              name="hand"
              color="yellow"
              size={20}
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
        </View>}
      </View>
    </View>
  );
}

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