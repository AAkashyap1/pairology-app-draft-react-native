import { AntDesign }from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import AppText from './AppText';
import Colors from '../constants/Colors';

type Props = { 
  name: string, 
  email: string,
  lastMessage: string,
  onPress: () => void
}

export default function MessageTab({ name, email, lastMessage, onPress } : Props) {
  return (
    <TouchableOpacity style={message.container} onPress={onPress} >
      <View style={{}}>
        <AppText 
          title={false}
          size={19}
          text={name}
          color={Colors.lightPurple.text}
          bold
        />
        <View style={{ marginTop: '0.5%' }} >
          <AppText 
            title={false}
            size={14}
            text={email}
            color={Colors.light.text}
          />
        </View>
        <View style={{ marginTop: '2.5%' }} >
          <AppText 
            title={false}
            size={16}
            text={lastMessage}
            color={Colors.dark.text}
          />
        </View>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <AntDesign 
          name="right"
          color={Colors.lightPurple.text}
          size={17}
        />
      </View>
    </TouchableOpacity>
  )
}

const message = StyleSheet.create({
  container: {
    borderTopWidth: 0.3,
    borderTopColor: 'gray',
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    marginTop: '2%'
  }, 
  button: {
    borderRadius: 8,
    backgroundColor: Colors.lightPurple.text,
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: "center",
  }
})

