import { AntDesign, Octicons } from "@expo/vector-icons";
import { Picker, Platform, View } from "react-native";
import Colors from "../constants/Colors";
import { Data } from "../constants/Data";
import { useData } from "../hooks/useData";
import { Question } from "../types/Props";
import AppText from "./AppText";
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import { useEffect, useState } from "react";

export default function InputDropdown({
  label,
  options,
  hideTitle,
} : Question) {
  
  const { state, dispatch } = useData();
  const items = options.map((option, idx) => ({ id: String(idx + 1), title: option.name }));
  function getInitialValue() {
    for (const item of items) {
      if (item.title == state[label as keyof Data]) {
        return item.id;
      }
    }
    return '';
  }
  
  return (
    <View>
      {!hideTitle &&
        <View style={Platform.select({ ios: { zIndex: 100 }})}>
          <AppText 
            text={label}
            bold
            size={18}
            title
            color={Colors.dark.text}
          />
        </View>
      }
      <View style={[{
        marginTop: 7,
        paddingHorizontal: 1.5,
        paddingVertical: 0.1,
        borderRadius: 8,
        borderWidth: 1,
      }, Platform.select({ ios: { zIndex: 100 }})]}>
        <AutocompleteDropdown
          ChevronIconComponent={
            <Octicons
              name="chevron-down"
              color="gray"
              size={20}
            />
          }
          rightButtonsContainerStyle={{
            borderRadius: 8,
            backgroundColor: "white"
          }}
          textInputProps={{
            placeholderTextColor: Colors.dark.text,
            placeholder: `Select ${label.toLowerCase()}...`,
            autoCorrect: false,
            autoCapitalize: "none",
            style: {
              fontSize: 14,
              backgroundColor: 'white'
            }
          }}
          onSelectItem={(newValue) => {
            if (newValue) {
              dispatch({ type: label, payload: newValue.title })
            }
          }}
          renderItem={(item) => (
            <View style={{ padding: 15 }}>
              <AppText 
                text={item.title ? item.title : ''}
                size={14}
                color={Colors.dark.text}
                title={false}
              />
            </View>
          )}
          inputContainerStyle={{
            backgroundColor: 'white'
          }}
          clearOnFocus={false}
          showClear={false}
          initialValue={getInitialValue()}
          closeOnBlur={true}
          closeOnSubmit={true}
          dataSet={items} 
        />
      </View>
    </View>
  )
}