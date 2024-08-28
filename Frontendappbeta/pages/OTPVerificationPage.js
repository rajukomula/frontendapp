import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const OTPVerificationPage = () => {
  const [userOtp, setUserOtp] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading status
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes countdown in seconds
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params; // Get email from route params
  const API_URL = 'https://musical-train-7vrjpgwx64xj3rpv5-8080.app.github.dev/api/v1'; // Define your API URL here

  useEffect(() => {
    // Timer function to count down every second
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);

  const handleVerifyOtp = async () => {
    if (!userOtp) {
      Alert.alert('Validation Error', 'Please enter the OTP.');
      return;
    }

    setLoading(true); // Show loading spinner

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
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  // Helper function to format time in MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.infoText}>An OTP has been sent to your email and it will expire in <Text style={styles.countdown}>{formatTime(timeLeft)}</Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        value={userOtp}
        onChangeText={setUserOtp}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyOtp} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" /> // Show loading spinner
        ) : (
          <Text style={styles.buttonText}>Submit</Text>
        )}
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
  infoText: {
    fontSize: 16,
    marginBottom: 20,
  },
  countdown: {
    color: 'green',
    fontWeight: 'bold',
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
    flexDirection: 'row', // Allow spinner and text to be side by side
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default OTPVerificationPage;
