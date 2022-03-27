import { StatusBar } from 'expo-status-bar';
import { FlatList, Linking, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import React, { Dispatch, SetStateAction } from 'react';
import AppText from '../components/AppText';
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { interestedForm } from '../constants/Forms';
import { Data } from '../constants/Data'
import { useData } from '../hooks/useData';

type Props = {
  title: string,
  options: { name: string, link?: string }[],
  visible: boolean,
  setVisible: Dispatch<SetStateAction<boolean>>
  link: string,
  linkText: string
}
 
export default function DropdownModal({ 
  title, 
  options, 
  visible, 
  setVisible, 
  link, 
  linkText,
} : Props) {
  const { state, dispatch } = useData();
  console.log(link, linkText)
  return (
    <Modal 
      presentationStyle='pageSheet'
      style={[modalStyles.container]}
      visible={visible}
      animationType="slide"
    >
      <SafeAreaView 
        style={{ 
          width: '100%', 
          alignItems: 'center',
        }}
      >
        <View style={{ width: '80%', marginTop: '10%' }}>
          <View style={{ alignItems: 'center' }} >
            <AppText 
              title={true}
              size={30}
              text={'Choose ' + title} 
              color={Colors.dark.text}
            />
          </View>
          <FlatList 
            style={listStyles.container}
            data={options}
            renderItem={(item) => (
              <TouchableOpacity
                key={item.index}
                onPress={() => {
                  dispatch({ type: title, payload: options[item.index].name });
                  setVisible(false);
                }}
                style={{ paddingVertical: '4%', borderBottomWidth: 1, flexDirection: "row" }}
              >
                <AppText 
                  size={20}
                  color={options[item.index].name === state[title as keyof Data]  ? Colors.lightPurple.text : Colors.dark.text}
                  title={false}
                  text={options[item.index].name}
                  flex={1}
                />
                {options[item.index].name === state[title as keyof Data] &&
                  <FontAwesome
                    name="check"
                    color={Colors.lightPurple.text}
                    size={25}
                  /> 
                } 
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
          />
          <TouchableOpacity
            onPress={() => Linking.openURL(link)}
            style={{ 
              marginTop: ((link && linkText) ? '5%' : '0%'), 
              alignItems: 'center',
              width: ((link && linkText) ? '100%' : '0%'),
            }}
          >
            <AppText 
              title={false}
              size={18}
              text={linkText}
              color={Colors.lightPurple.text}
              underline
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar />
    </Modal>
  );
}

const listStyles = StyleSheet.create({
  container: {
    marginTop: '7%',
  }
})

const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    width: '100%', 
    height: '100%',
  }
})