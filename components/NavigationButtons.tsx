import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from "../constants/Colors";
import AppText from "./AppText";

type Props = {
  onPressPrev: () => void,
  onPressNext: () => void,
  disablePrev?: boolean,
  disableNext?: boolean
}

export default function NavigationButtons({ 
  onPressPrev, 
  onPressNext, 
  disablePrev, 
  disableNext 
} : Props ) {

  function handlePrev() {
    if (!disablePrev) {
      onPressPrev();
    }
  }

  function handleNext() {
    if (!disableNext) {
      onPressNext();
    }
  }

  return (
    <View
      style={buttonStyles.container}
    >
      <TouchableOpacity
        onPress={() => handlePrev()}
        style={buttonStyles.button}
      >
        <AppText 
          text={`Back`}
          size={20}
          color="white"
          title={false}
          bold
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleNext()}
        style={buttonStyles.button}
      >
        <AppText 
          text={`Next`}
          size={20}
          color="white"
          title={false}
          bold
        />
      </TouchableOpacity>
    </View>
  )
}

const buttonStyles = StyleSheet.create({
  container: {
    width: '80%',
    height: '6%',
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: '8%'
  },
  button: {
    width: '40%',
    height: '100%',
    flexDirection: "row",
    backgroundColor: Colors.lightPurple.text,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  }
})