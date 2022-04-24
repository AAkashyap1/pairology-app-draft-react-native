import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppText from '../components/AppText';
import Colors from '../constants/Colors';
import ProgressBar from '../components/ProgressBar';
import NavigationButtons from '../components/NavigationButtons';
import { RootTabScreenProps } from '../types';
import { questions } from '../constants/Questions'
import { useEffect, useState } from 'react';
import { Data } from '../constants/Data';
import { useData } from '../hooks/useData';
import InputDropdown from '../components/InputDropdown';


export default function Survey({ navigation } : RootTabScreenProps<'Survey'>) {
  const { state } = useData()
  const [pageNumber, setPageNumber] = useState(1);
  const [tempQuestions, setTempQuestions] = useState(questions.slice(4 * (pageNumber - 1), 4 * pageNumber));
  const [showError, setShowError] = useState(false);

  function validate() {
    let entered = 0;
    for (let i = 0; i < tempQuestions.length; i++) {
      if (state[tempQuestions[i].label as keyof Data] !== "") {
        entered += 1;
      }
    }
    if (entered === tempQuestions.length) {
      handleNext()
    } else {
      setShowError(true);
    }
  }

  function handleNext() {
    if (pageNumber === Math.floor(((questions.length) + 3) / 4)) {
      navigation.navigate('Dashboard')
    } else {
      setPageNumber(pageNumber + 1);
    }
  }

  function handlePrev() {
    if (pageNumber === 1) {
      navigation.navigate('Account');
    } else {
      setPageNumber(pageNumber - 1);
    }
  }

  useEffect(() => {
    setTempQuestions(questions.slice(4 * (pageNumber - 1), 4 * pageNumber));
    setShowError(false);
  }, [pageNumber])

  return (
    <SafeAreaView style={[safeAreaStyles.container]}>
      <ProgressBar amount={pageNumber - 1} />
      <ScrollView style={{ height: '85%', width: '100%', marginTop: '5%' }}>
        <TouchableWithoutFeedback
          style={safeAreaStyles.container}
          onPress={Keyboard.dismiss}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={safeAreaStyles.container}
          >
            <View style={{ width: '80%' }}>
              <View style={{ marginTop: '5%', alignItems: 'center' }} >
                <AppText 
                  title={true}
                  size={30}
                  text={'Survey Questions'}
                  color={Colors.dark.text}
                />
              </View>
              <View>
                {tempQuestions.map((question, questionIdx) => (
                  <View 
                    key={question.label}
                    style={[
                      { marginTop : '7%' }, 
                      Platform.select({ ios: { zIndex: question.component === InputDropdown ? 100 : 95 }})
                    ]}
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
                    {showError && state[question.label as keyof Data] === "" &&
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
                ))}
              </View>
            </View>
            <StatusBar />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ScrollView>
      <NavigationButtons 
        onPressPrev={() => handlePrev()}
        onPressNext={() => validate()}
      />
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

