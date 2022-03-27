import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { Data } from '../constants/Data';
import { useData } from '../hooks/useData';
import { Props, Question } from '../types/Props';
import AppText from './AppText';

export default function Scale({
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
        {[1, 2, 3, 4, 5, 6, 7].map((option, optionIdx) => (
          <TouchableOpacity 
            key={option}
            style={[
              styles.button, 
              optionIdx === 6 ? { borderTopRightRadius: 8, borderBottomRightRadius: 8 } : { borderRightWidth: 1, borderRightColor: "black" }, 
              optionIdx !== 0 ? null : { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
              String(option) === state[label as keyof Data] ? { backgroundColor: "lavender" } : null
            ]} 
            onPress={() => dispatch({ type: label, payload: String(option) })}
          >
            <View style={styles.text}>
              <AppText 
                size={14}
                text={String(option)}
                title={false}
                color={Colors.dark.text}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.underText}>
        <View style={{ alignItems: "flex-start", width: '50%' }}>
          <AppText 
            text={leftExtreme}
            size={14}
            color={Colors.dark.text}
            title={false}
          />
        </View>
        <View style={{ alignItems: "flex-end", width: '50%' }}>
          <AppText 
            text={rightExtreme}
            size={14}
            color={Colors.dark.text}
            title={false}
          />
        </View>
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
  },
  underText: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  }
});