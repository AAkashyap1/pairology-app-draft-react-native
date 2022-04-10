import { StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";
import AppText from "./AppText";

type Props = {
  away: boolean,
  text: string,
  change: boolean,
}

export default function Message({ away, text, change } : Props) {
  return (
    <View style={[messageStyles.container, 
      { justifyContent: (away ? 'flex-start' : 'flex-end'), 
        marginTop: (change ? '5%' : '2%')
      }]
    }>
      <View style={[messageStyles.bubble, 
        { backgroundColor: (away ? 'lavender' : Colors.lightPurple.text) }]
      }>
        <AppText 
          title={false}
          size={14}
          color={away ? Colors.dark.text : 'white'}
          text={text}
        />
      </View>
    </View>
  )
}

const messageStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }, 
  bubble: {
    maxWidth: '100%',
    flex: 0,
    padding: 15, 
    borderRadius: 25,
  }
})