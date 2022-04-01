import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppText from '../components/AppText';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';
import { questions } from '../constants/Questions'
import React from 'react';
import { Entypo } from '@expo/vector-icons';

export default function Survey({ route, navigation } : RootTabScreenProps<'Chat'>) {
  return (
    <SafeAreaView style={[safeAreaStyles.container]}>
      <View style={navStyles.container}>
        <View
          style={navStyles.arrow}
        >
          <TouchableOpacity 
            onPress={() => navigation.navigate('Messages')}
          >
            <Entypo 
              name="chevron-left"
              size={20}
              color={Colors.dark.text}
            />
          </TouchableOpacity>
        </View>
        <View style={navStyles.text} >
          <AppText 
            title={true}
            size={20}
            text="Rafael Basto"
            color={Colors.dark.text}
          />
        </View>
      </View>
      <ScrollView style={{ height: '100%', width: '100%' }}>
        <TouchableWithoutFeedback
          style={safeAreaStyles.container}
          onPress={Keyboard.dismiss}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={safeAreaStyles.container}
          >
            <View style={{ width: '90%' }}>
              {questions.map((question, questionIdx) => (
                <View 
                  key={question.label}
                  style={{ marginTop : '5%' }}
                >
                  <question.component
                    label={question.label}
                    options={question.options}
                    leftExtreme={question.leftExtreme}
                    rightExtreme={question.rightExtreme}
                    link={question.link}
                    linkText={question.linkText}
                    hideTitle={question.hideTitle}
                  />
                </View>
              ))}
            </View>
            <StatusBar />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
}

const safeAreaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: '100%', 
    height: '100%',
  }
})

const navStyles = StyleSheet.create({
  container: {
    padding:'4%', 
    marginTop: '1%', 
    borderColor: 'gray', 
    borderBottomWidth: 1, 
    width: '100%', 
    flexDirection: 'row',
  },
  text: { 
    flex: 1,
    alignItems: 'center',
  },
  arrow: { 
    zIndex: 1,
    position: 'absolute',
    left: '4%',
    top: '75%',
    justifyContent: 'center',
  }
})
