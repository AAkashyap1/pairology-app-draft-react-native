import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppText from '../components/AppText';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';
import { doc, DocumentReference, getDoc, setDoc } from "firebase/firestore";
import { db } from '../firebase';
import { useData } from '../hooks/useData';
import NavigationButtons from '../components/NavigationButtons';

export default function ResultsScreen({ navigation } : RootTabScreenProps<'Results'>) {
  const { state } = useData();
  const [saved, setSaved] = useState(false);
  console.log(state)
  function saveData() {
    const docRef = doc(db, "public_user_data", state['Name']);
    setDoc(docRef, state);
  }

  return (
    <SafeAreaProvider style={safeAreaStyles.container}>
      <View style={createAccountStyles.container}>
        <AppText 
          text={JSON.stringify(state)}
          size={15}
          color={Colors.dark.text}
          title
        />
      </View>
      <NavigationButtons 
        onPressPrev={() => navigation.navigate('Account')}
        onPressNext={() => saveData()}
      />
    </SafeAreaProvider>
  );
}


const createAccountStyles = StyleSheet.create({
  container: {
    marginBottom: '5%',
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