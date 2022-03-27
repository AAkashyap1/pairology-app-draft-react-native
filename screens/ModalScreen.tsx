import { StatusBar } from 'expo-status-bar';
import { FlatList, Keyboard, KeyboardAvoidingView, Linking, Platform, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import React, { Dispatch, SetStateAction } from 'react';
import AppText from '../components/AppText';
import Colors from '../constants/Colors';
import { universities } from '../data/universities';
import { FontAwesome } from '@expo/vector-icons';
import { interestedForm } from '../constants/Forms';

type Props = {
  university: string,
  setUniversity: Dispatch<SetStateAction<string>>
}
 
export default function ModalScreen({ university, setUniversity } : Props) {
  console.log(university)
  return (
    <SafeAreaView style={[safeAreaStyles.container]}>
      <TouchableWithoutFeedback
        style={safeAreaStyles.container}
        onPress={Keyboard.dismiss}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={safeAreaStyles.container}
        >
          <View style={{ width: '80%' }}>
            <View style={{ alignItems: 'center' }} >
              <AppText 
                title={true}
                size={30}
                text={'Current Universities'}
                color={Colors.dark.text}
              />
            </View>
            <TouchableOpacity
              onPress={() => Linking.openURL(interestedForm)}
            >
              <View style={interestedStyles.container}>
                <AppText 
                  text={`Don't see your college?`}
                  size={18}
                  underline
                  title={false}
                  color={Colors.lightPurple.text}
                />
              </View>
            </TouchableOpacity>
            <FlatList 
              style={listStyles.container}
              data={universities}
              renderItem={(item) => (
                <TouchableOpacity
                  key={item.index}
                  onPress={() => setUniversity(universities[item.index].name)}
                  style={{ paddingVertical: '4%', borderBottomWidth: 1, flexDirection: "row" }}
                >
                  <AppText 
                    size={20}
                    color={universities[item.index].name === university ? Colors.lightPurple.text : Colors.dark.text}
                    title={false}
                    text={universities[item.index].name}
                    flex={1}
                  />
                  {universities[item.index].name === university &&
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
          </View>
          <StatusBar />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const listStyles = StyleSheet.create({
  container: {
    marginTop: '5%',
  }
})

const safeAreaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    width: '100%', 
    height: '100%',
  }
})

const interestedStyles = StyleSheet.create({
  container: {
    marginTop: '1.5%',
    marginBottom: '5%',
    alignItems: 'center',
  }
})