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
        <Stack.Screen 
          name="Landing" 
          component={LandingPage} 
          options={{ headerShown: false }} // Hide header
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpPage} 
          options={{ 
            headerShown: true, // Show header
            title: 'Sign Up', // Set title for the header
            headerBackTitleVisible: false, // Hide default back button title
          }} 
        />
        <Stack.Screen 
          name="OTPVerification" 
          component={OTPVerificationPage} 
          options={{ 
            headerShown: true, // Show header
            title: 'Verify OTP', // Set title for the header
            headerBackTitleVisible: false, // Hide default back button title
          }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomePage} 
          options={{ 
            headerShown: false, // Hide header
            gestureEnabled: false // Disable swipe gestures for back navigation
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 