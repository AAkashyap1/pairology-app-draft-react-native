import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { Data } from '../constants/Data';
import { useData } from '../hooks/useData';
import { Props, Question } from '../types/Props';
import AppText from './AppText';

export default function ButtonGroup({
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
      <View style={styles.group}>
        {options.map((option, optionIdx) => (
          <TouchableOpacity 
            key={option.name}
            style={[
              styles.button, 
              optionIdx === options.length - 1 ? { borderTopRightRadius: 8, borderBottomRightRadius: 8 } : { borderRightWidth: 1, borderRightColor: "black" }, 
              optionIdx >= options.length - 2 ? { flexGrow: 1 } : null,
              optionIdx !== 0 ? null : { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
              option.name === state[label as keyof Data] ? { backgroundColor: "lavender" } : null
            ]} 
            onPress={() => dispatch({ type: label, payload: option.name })}
          >
            <View style={styles.text}>
              <AppText 
                size={14}
                text={option.name}
                title={false}
                color={Colors.dark.text}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  group: {
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: "center",
    borderWidth: 1,
    marginTop: 7,
  },
  button: {
    flex: 1,
  },
  text: {
    alignItems: 'center',
    paddingVertical: 16,
    fontSize: 14
  }
});
