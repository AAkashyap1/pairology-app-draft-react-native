import { StyleSheet, View } from "react-native"
import Colors from "../constants/Colors"
import { questions } from "../constants/Questions"
import AppText from "./AppText"

type Props = {
  amount: number,
}

export default function ProgressBar({ amount } : Props) {
  console.log(amount);
  return (
    <View style={progressBarSytles.container}>
      <View 
        style={
          [progressBarSytles.bar, 
            { width: (String(Math.round(100 * amount / ((questions.length + 3) / 4))) + '%') }
          ]
        } 
      />
      {amount !== 3 && <View style={progressBarSytles.text}>
        <AppText 
          title={true} 
          size={16} 
          text={String(Math.round(100 * amount / ((questions.length + 3) / 4))) + '%'} 
          color={Colors.dark.text}
        />
      </View>}
    </View>
  )
}

const progressBarSytles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.dark.text,
    borderBottomWidth: 0.2, 
    height: '3%',
    width: '100%',
    flexDirection: "row",
  },
  bar: {
    backgroundColor: Colors.lightPurple.text,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  text: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})