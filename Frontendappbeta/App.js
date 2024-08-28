// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import pages from the pages folder
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import OTPVerificationPage from './pages/OTPVerificationPage';
import HomePage from './pages/HomePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} options={{ title: 'Landing Page' }} />
        <Stack.Screen name="SignUp" component={SignUpPage} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="OTPVerification" component={OTPVerificationPage} options={{ title: 'Verify OTP' }} />
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
