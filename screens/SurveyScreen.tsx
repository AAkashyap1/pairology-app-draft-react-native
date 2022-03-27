import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppText from '../components/AppText';
import Colors from '../constants/Colors';
import ProgressBar from '../components/ProgressBar';
import NavigationButtons from '../components/NavigationButtons';
import { RootTabScreenProps } from '../types';
import { questions } from '../constants/Questions'


export default function SurveyScreen({ route, navigation } : RootTabScreenProps<'Survey'>) {
  const { pageNumber } = route.params;
  return (
    <SafeAreaView style={[safeAreaStyles.container]}>
      <ProgressBar amount={pageNumber - 1} />
      <TouchableWithoutFeedback
        style={safeAreaStyles.container}
        onPress={Keyboard.dismiss}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={safeAreaStyles.container}
        >
          <View style={{ width: '80%' }}>
            <View style={{ marginVertical: '5%', alignItems: 'center' }} >
              <AppText 
                title={true}
                size={30}
                text={'Basic Information'}
                color={Colors.dark.text}
              />
            </View>
            <View>
              {questions.slice(4 * (pageNumber - 1), 4 * pageNumber).map((question) => (
                <View 
                  key={question.label}
                  style={{ marginTop : '7%' }}
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
          </View>
          <NavigationButtons 
            onPressPrev={() => 
              pageNumber === 1 ? 
                navigation.navigate('Account') : 
                navigation.navigate('Survey', { pageNumber: pageNumber - 1 })
            }
            onPressNext={() => navigation.navigate('Survey', { pageNumber: pageNumber + 1 })}
          />
          <StatusBar />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
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

