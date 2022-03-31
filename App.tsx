import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateAccount from './screens/CreateAccount';
import DataProvider from './providers/DataProvider';
import Survey from './screens/Survey';
import Dashboard from './screens/Dashboard';
import Chat from './screens/Chat';

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
            component={Survey}
          />
          <Stack.Screen 
            options={{ headerShown: false }}
            name="Dashboard"
            component={Dashboard}
          />
          <Stack.Screen 
            options={{ headerShown: false }}
            name="Chat"
            component={Chat}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};