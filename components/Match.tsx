import { Entypo } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import AppText from '../components/AppText';
import Colors from '../constants/Colors';

type Props = { 
  name: string, 
  email: string,
  bio: string,
  onPress: () => void
}

export default function Match({ name, email, bio, onPress } : Props) {
  return (
    <View style={match.container} >
      <AppText 
        title={true}
        size={27}
        text={name}
        color={Colors.dark.text}
      />
      <View style={{ marginTop: '1%' }} >
        <AppText 
          title={false}
          size={16}
          text={email}
          color={Colors.light.text}
        />
      </View>
      <View style={{ marginTop: '4%' }}>
        <AppText 
          title={false}
          size={17}
          text={bio}
          color={Colors.dark.text}
          center
        />
      </View>
      <View style={{ marginTop: '5%' }}>
        <TouchableOpacity 
          style={match.button} 
          onPress={onPress}
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
      </View>
    </View>
  )
}

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

