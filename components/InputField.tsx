import { StyleSheet, TextInput, View } from "react-native";
import Colors from "../constants/Colors";
import { Data } from "../constants/Data";
import { useData } from "../hooks/useData";
import { Question } from "../types/Props";
import AppText from "./AppText";

export default function InputField({
  label,
  options,
  leftExtreme,
  rightExtreme,
  link,
  hideTitle,
} : Question) {
  const { state, dispatch } = useData();
  return (
    <View>
      <View>
        <AppText 
          text={`${label}`}
          bold
          size={18}
          title
          color={Colors.dark.text}
        />
      </View>
      <TextInput
        autoCorrect={false}
        placeholderTextColor={Colors.dark.text}
        placeholder={`Enter your ${label.toLowerCase()}...`}
        value={state[label as keyof Data]}
        onChangeText={(newText) => {
          dispatch({ type: label, payload: newText });
        }}
        style={inputStyles.container}
      />
    </View>
  )
}

const inputStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 15,
    marginTop: 7, 
    borderRadius: 8,
  }
})