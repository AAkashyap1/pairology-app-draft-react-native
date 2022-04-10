import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TextInputBase, Touchable, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppText from '../components/AppText';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import Message from '../components/Message';

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
              color={Colors.light.text}
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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[safeAreaStyles.container, { flexDirection: 'column' }]}
      >
        <ScrollView
          style={{ width: '100%', flex: 1, paddingHorizontal: '4%' }}
        >
          <View>
            <Message 
              away={true}
              change={true}
              text={'Hey Ananth'}
            />
            <Message 
              away={false}
              change={true}
              text={'Hey Rafael'}
            />
            <Message 
              away={true}
              change={true}
              text={'How are you doing today'}
            />
            <Message
              away={false}
              change={true}
              text={'I am doing good today'}
            />
            <Message
              away={false}
              change={false}
              text={'How old are you'}
            />
          </View>
        </ScrollView>
        <TextInput 
          placeholder="Enter your message..."
          placeholderTextColor={Colors.light.text}
          style={{ 
            width: '92%', 
            justifyContent: 'flex-end', 
            padding: 15, 
            backgroundColor: 'lavenderblush', 
            borderRadius: 25,
            marginTop: '3%', 
            marginBottom: '2%',
          }}
        />
        <StatusBar />
      </KeyboardAvoidingView>
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
    borderBottomWidth: 0.3, 
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
