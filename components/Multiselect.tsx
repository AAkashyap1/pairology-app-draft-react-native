import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { Data } from '../constants/Data';
import { useData } from '../hooks/useData';
import { Question } from '../types/Props';
import AppText from './AppText';

export default function Multiselect({
  label,
  options,
  leftExtreme,
  rightExtreme,
  link,
  hideTitle,
} : Question) {
  const { state, dispatch } = useData();
  const [error, setError] = useState('');

  function updateResponses(response: string) {
    setError('');
    if (state[label as keyof Data].split(',').includes(response)) {
      dispatch({
        type: label, payload: state[label as keyof Data].replace(response + ',', '')
      })
      state[label as keyof Data].replace(response + ',', '')
    } else if (state[label as keyof Data].split(',').length > 3) {
      setError('You can only choose 3 options!');
    } else {
      dispatch({
        type: label, payload: (state[label as keyof Data] + response + ',')
      })
    }
  }
 
  return (
    <View>
      <View>
        <AppText 
          text={`Pick up to 3 ${label.toLowerCase()}s`}
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
            style={[styles.button, 
              { backgroundColor: (state[label as keyof Data].split(',').includes(option.name) ? 'lavender' : 'white') }
            ]} 
            onPress={() => updateResponses(option.name)}
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
      {error !== "" &&
        <View style={{ alignItems: "flex-start", marginTop: '2%' }} >
          <AppText 
            title={false}
            size={14}
            text={error}
            color='red'
            bold
          />
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  group: {
    width: '100%',
    flexDirection: 'row',
    alignItems: "flex-start",
    marginTop: 7,
    flexWrap: 'wrap'
  },
  button: { 
    borderWidth: 1,
    borderColor: Colors.dark.text,
    borderRadius: 12,
    marginRight: 10,
    marginBottom: 5,
  },
  text: {
    alignItems: 'center',
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  underText: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  }
});