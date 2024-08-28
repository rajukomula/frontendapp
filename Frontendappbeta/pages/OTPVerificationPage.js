// pages/OTPVerificationPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const OTPVerificationPage = () => {
  const [userOtp, setUserOtp] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params; // Get email from route params
  const API_URL = 'https://musical-train-7vrjpgwx64xj3rpv5-8080.app.github.dev/api/v1'; // Define your API URL here

  const handleVerifyOtp = async () => {
    if (!userOtp) {
      Alert.alert('Validation Error', 'Please enter the OTP.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/verify-otp?email=${encodeURIComponent(email)}&otpValue=${encodeURIComponent(userOtp)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        Alert.alert('Success', 'OTP verified successfully!');
        navigation.navigate('Home'); // Navigate to Home page
      } else {
        Alert.alert('Error', 'Invalid OTP. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        value={userOtp}
        onChangeText={setUserOtp}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2DFD2',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    margin: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default OTPVerificationPage;
