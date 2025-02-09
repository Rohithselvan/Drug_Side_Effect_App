import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './screens/LoginScreen';
import PredictionScreen from './screens/PredictionScreen';
import AboutScreen from './screens/AboutScreen';

// Define the Tab Navigator and Stack Navigator
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Bottom Tabs for the main app functionality
function MainAppTabs({ setIsLoggedIn }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Prediction') {
            iconName = focused ? 'medkit' : 'medkit-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#42f44b',
        tabBarInactiveTintColor: '#f4d35e',
        tabBarStyle: { backgroundColor: '#2d2d2d' },
      })}
    >
      {/* Passing setIsLoggedIn to allow logout in PredictionScreen */}
      <Tab.Screen name="Prediction">
        {props => <PredictionScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Tab.Screen>
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Display Login screen if not logged in */}
        {!isLoggedIn ? (
          <Stack.Screen name="Login">
            {props => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
        ) : (
          /* Once logged in, navigate to the main app with tabs */
          <Stack.Screen name="Main">
            {props => <MainAppTabs {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
