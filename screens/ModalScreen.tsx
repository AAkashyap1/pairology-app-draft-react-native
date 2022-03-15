import { StatusBar } from 'expo-status-bar';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button, FlatList, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import PickerItem from '../components/PickerItem';
import SearchBar from 'react-native-dynamic-search-bar'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Octicons } from '@expo/vector-icons';

type University = {
  name: string, 
  link: string,
}

type Props = {
  university: University, 
  universities: University[],
  setUniversity: Dispatch<SetStateAction<University>>,
  setOpen: Dispatch<SetStateAction<boolean>>,
}

import { Input } from '@ui-kitten/components';

export const InputSimpleUsageShowcase = () => {

  const [value, setValue] = useState('');

  return (
    <Input
      placeholder='Place your Text'
      value={value}
      onChangeText={nextValue => setValue(nextValue)}
    />
  );
};

export default function ModalScreen({ university, universities, setUniversity, setOpen } : Props) {
  const [search, setSearch] = useState("");

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={styles.container}>
        <InputSimpleUsageShowcase/>
      </View>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  list: {
    marginTop: 20, 
    alignItems: "flex-start",
    paddingBottom: 80,
  }
});
