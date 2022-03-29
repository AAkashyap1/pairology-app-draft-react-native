import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateAccountScreen from './screens/CreateAccountScreen';
import DataProvider from './providers/DataProvider';
import SurveyScreen from './screens/SurveyScreen';
import ResultsScreen from './screens/ResultsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Account"
            component={CreateAccountScreen}
          />
          <Stack.Screen 
            options={{ headerShown: false }}
            name="Survey"
            component={SurveyScreen}
          />
          <Stack.Screen 
            options={{ headerShown: false }}
            name="Results"
            component={ResultsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};