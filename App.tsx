import { Octicons, FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, Image, View, Linking, Button, TouchableWithoutFeedback, Modal, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useFonts, DMSans_700Bold } from '@expo-google-fonts/dm-sans';
import { Inter_400Regular } from '@expo-google-fonts/inter'
import React, { useState } from 'react';
import ModalScreen from './screens/ModalScreen';

const universities = [
  {
    "name": "Boston University",
    "link": "https://fyayvmu02qn.typeform.com/to/MDxfhOws"
  },
  {
    "name": "Cornell University",
    "link": "https://fyayvmu02qn.typeform.com/to/HOKe9jq7"
  },
  {
    "name": "New York University",
    "link": "https://fyayvmu02qn.typeform.com/to/wAe2LgtH"
  },
  {
    "name": "Stanford University",
    "link": "https://fyayvmu02qn.typeform.com/to/XdxLj2Ld"
  },
  {
    "name": "University of Chicago",
    "link": "https://fyayvmu02qn.typeform.com/to/NWLVhhoc"
  },
  {
    "name": "University of Pennsylvania",
    "link": "https://fyayvmu02qn.typeform.com/to/rcnDnChB"
  }
]

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [university, setUniversity] = useState({ link: "", name: "" });
  let [fontsLoaded] = useFonts({
    DMSans_700Bold,
    Inter_400Regular
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={safeAreaStyles.container}>
        <Image 
          style={imageStyles.container} 
          source={require("./assets/images/pairology.png")} 
        />
        <Text style={createAccountStyles.container}>Create an account</Text>
        <View style={lineStyles.container} />
        <TouchableOpacity
          onPress={() => setModalOpen(true)}
        >
          <View
            style={modalSelectStyles.container}
          >
            <Text style={universityTextStyles.container}>
              {university.name ? university.name : 'Select university...'}
            </Text>
            <Octicons
              name="chevron-down"
              color="gray"
              size={20}
              style={{ marginLeft: 15 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://pairology.me')}
        >
          <Text
            style={interestedStyles.container}
          >
            Don't see your college?
          </Text>
        </TouchableOpacity>
        <View style={googleButtonStyles.container}>
          <FontAwesome
            name="google"
            color="white"
            size={25}
            style={{ marginRight: 15 }}
          />
          <Text 
            style={googleTextStyles.container}
          >
            Sign up with Google
          </Text>
        </View>
        <StatusBar />
        <Modal visible={modalOpen} animationType="slide">
          <ModalScreen 
            university={university}
            universities={universities}
            setUniversity={setUniversity}
            setOpen={setModalOpen}
          />
        </Modal>
      </SafeAreaProvider>
    );
  }
}

const modalSelectStyles = StyleSheet.create({
  container: {
    width: "80%",
    flexDirection: "row",
    borderWidth: 0.7,
    padding: 15,
    marginTop: 50, 
    marginBottom: 10,
    borderRadius: 10,
  }
})

const universityTextStyles = StyleSheet.create({
  container: {
    color: "black",
    fontSize: 17,
    flex: 1,
    fontFamily: "Inter_400Regular",
  }
})

const lineStyles = StyleSheet.create({
  container: {
    width: "80%",
    height: 0.5,
    backgroundColor: "black",
  }
})

const interestedStyles = StyleSheet.create({
  container: {
    fontSize: 18,
    textDecorationLine: "underline",
    color: "#7667DD",
    fontFamily: "Inter_400Regular",
    marginBottom: 30,
  }
})

const createAccountStyles = StyleSheet.create({
  container: {
    color: "black",
    fontSize: 30, 
    fontFamily: "DMSans_700Bold",
    marginBottom: 20,
  }
})

const imageStyles = StyleSheet.create({
  container: {
    width: "80%",
    height: "9.5%",
    marginTop: 30,
    marginBottom: 50,
  }
})

const googleButtonStyles = StyleSheet.create({
  container: {
    width: "80%",
    height: "9%",
    flexDirection: "row",
    backgroundColor: "#7667DD",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40
  }
})

const googleTextStyles = StyleSheet.create({
  container: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  }
})

const safeAreaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  }
})