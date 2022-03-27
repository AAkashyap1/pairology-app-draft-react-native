import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateAccount from './screens/CreateAccountScreen';
import DataProvider from './Provider';
import SurveyScreen from './screens/SurveyScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Account"
            component={CreateAccount}
          />
          <Stack.Screen 
            options={{ headerShown: false }}
            name="Survey"
            component={SurveyScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};