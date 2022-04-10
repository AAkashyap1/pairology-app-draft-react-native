import { Octicons, FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as WebBrowser from 'expo-web-browser';
import * as Google from "expo-auth-session/providers/google";

import { useEffect, useState } from 'react';
import AppText from '../components/AppText';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';
import InputDropdown from '../components/InputDropdown';
import { universities } from '../data/universities';
import { interestedForm } from '../constants/Forms';
import { useData } from '../hooks/useData';

WebBrowser.maybeCompleteAuthSession();

export default function CreateAccount({ navigation } : RootTabScreenProps<'Account'>) {
  const { state } = useData();
  const [showError, setShowError] = useState(false);
  function validate() {
    if (state['University'] !== "") {
      navigation.navigate('Survey')
    } else {
      setShowError(true);
    }
  }

  /**
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      }
  }, [response]);


  async function signIn() {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, accessToken, user }= await Google.logInAsync({
        iosClientId: `776680840046-859q9vja4vmal5igt1b4uq6ov272fhei.apps.googleusercontent.com`,
        androidClientId: `776680840046-miffvn4rtki0qggfjspno1ilafca2a4s.apps.googleusercontent.com`,
      });

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        navigation.navigate("Profile", { user });
      }
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  */

  return (
    <SafeAreaProvider style={safeAreaStyles.container}>
      <View style={imageStyles.container}>
        <Image 
          style={imageStyles.image} 
          source={require("../assets/images/pairology.png")} 
        />
      </View>
      <View style={createAccountStyles.container}>
        <AppText 
          text={'Create an account'}
          size={30}
          color={Colors.dark.text}
          title
        />
      </View>
      <View style={lineStyles.container} />
      <View 
        style={{ 
          marginTop: '12%', 
          marginBottom: '10%', 
          width: '100%', 
          alignItems: 'center' 
        }}
      >
        <View style={{ width: '80%' }}>
          <InputDropdown 
            hideTitle={true}
            link={interestedForm}
            linkText={`Don't see your college?`}
            leftExtreme=""
            rightExtreme=""
            label={'University'}
            options={universities}
          />
          {showError && state['University'] === "" &&
            <View style={{ alignItems: "flex-start", marginTop: '2%' }} >
              <AppText 
                title={false}
                size={14}
                text="Required"
                color='red'
                bold
              />
            </View>
          }
        </View>
      </View>
      <TouchableOpacity
        onPress={() => validate()}
        style={googleButtonStyles.container}
      >
        <FontAwesome
          name="google"
          color="white"
          size={25}
          style={{ marginRight: 15 }}
        />
        <AppText 
          text={`Sign up with Google`}
          size={20}
          color="white"
          title={false}
          bold
        />
      </TouchableOpacity>
      <StatusBar />
    </SafeAreaProvider>
  );
}

const lineStyles = StyleSheet.create({
  container: {
    width: "80%",
    height: 1,
    backgroundColor: "black",
  }
})

const createAccountStyles = StyleSheet.create({
  container: {
    marginBottom: '5%',
  }
})

const imageStyles = StyleSheet.create({
  container: {
    marginTop: '-5%',
    width: '80%%',
    height: '9.5%',
    marginBottom: '11%',
    alignItems: 'center',
  }, 
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }
})

const googleButtonStyles = StyleSheet.create({
  container: {
    width: "80%",
    height: "8%",
    flexDirection: "row",
    backgroundColor: "#7667DD",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
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

