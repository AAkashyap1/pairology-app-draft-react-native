import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateAccount from './screens/CreateAccount';
import DataProvider from './providers/DataProvider';
import Survey from './screens/Survey';
import CurrentMatch from './screens/CurrentMatch';
import Messages from './screens/Messages';
import Chat from './screens/Chat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import OptProvider from './providers/OptProvider';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        options={{ 
          headerShown: false, 
          tabBarIcon: 
            ({ color, size }) => 
              <AntDesign
                name="user"
                color={color}
                size={size}
              />
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen 
        options={{ 
          headerShown: false, 
          tabBarIcon: 
            ({ color, size }) =>
              <AntDesign
                name="team"
                color={color}
                size={size}
              />
        }}
        name="Current Match"
        component={CurrentMatch}
      />
      <Tab.Screen 
        options={{ 
          headerShown: false, 
          tabBarIcon: 
            ({ color, size }) => 
              <Ionicons
                name="chatbox-outline"
                color={color}
                size={size}
              />
        }}
        name="Messages"
        component={Messages}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <DataProvider>
      <OptProvider>
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
      </OptProvider>
    </DataProvider>
  );
};