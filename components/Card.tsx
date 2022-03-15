import { Image, StyleSheet, Text, View } from "react-native"
import AppText from "./AppText"

type Props = {
  text: string,
  link: string,
}

export default function Card({ text, link} : Props) {
  return (
    <View style={cardStyles.container}>
      <View style={cardStyles.detailsContainer}>
        <Text style={cardStyles.headingText}>{text}</Text>
        <Text style={cardStyles.subText}>{link}</Text>
      </View>
    </View>
  )
}

const cardStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
    marginHorizontal: 10
  },
  detailsContainer: {
    padding: 15,
  },
  headingText: {
    color: "black",
    fontFamily: "Inter_400Regular",
    fontSize: 18,
  },
  subText: {
    color: "gray",
    fontFamily: "Inter_400Regular",
    fontSize: 15,
  }
})