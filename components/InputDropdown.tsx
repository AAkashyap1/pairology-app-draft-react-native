import { Octicons } from "@expo/vector-icons";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from "../constants/Colors";
import { Data } from "../constants/Data";
import { useData } from "../hooks/useData";
import { Props, Question } from "../types/Props";
import AppText from "./AppText";
import DropdownModal from "./DropdownModal";

export default function InputDropdown({
  label,
  options,
  leftExtreme,
  rightExtreme,
  link,
  linkText,
  hideTitle,
} : Question) {
  const { state } = useData();
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <DropdownModal 
        title={label}
        options={options}
        visible={visible}
        setVisible={setVisible}
        link={link}
        linkText={linkText}
      />
      {!hideTitle &&
        <View>
          <AppText 
            text={label}
            bold
            size={18}
            title
            color={Colors.dark.text}
          />
        </View>
      }
      <TouchableOpacity
        onPress={() => setVisible(true)}
      >
        <View
          style={dropdownStyles.container}
        >
          <AppText 
            text={state[label as keyof Data] ? state[label as keyof Data] : `Select ${label.toLowerCase()}...`}
            size={14}
            color={Colors.dark.text}
            title={false}
            flex={1}
          />
          <Octicons
            name="chevron-down"
            color="gray"
            size={20}
            style={{ marginLeft: 15 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const dropdownStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 13,
    marginTop: 7, 
    borderRadius: 8,
    flexDirection: "row",
  }
})