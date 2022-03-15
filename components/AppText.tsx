import { StyleSheet, Text } from "react-native";

type Props = {
  text: string,
  size: number,
}

export default function AppText({ text } : Props) {
  return (
    <Text style={styles.text}>
      {text}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontFamily: "Inter_400Regular",
    fontSize: 20,
  }
})