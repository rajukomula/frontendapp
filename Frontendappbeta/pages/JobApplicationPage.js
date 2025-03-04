import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  Switch
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function JobApplicationPage({ route, navigation }) {
  const { job } = route.params;
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [isAvailableFullTime, setIsAvailableFullTime] = useState(false);

  const handleSubmitApplication = () => {
    // Validation and submission logic
    if (fullName && email && phone) {
      // Show success modal or navigate
      navigation.navigate('ApplicationSuccess', { job });
    } else {
      // Show error
      alert('Please fill in all required fields');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Apply for {job.title}</Text>
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.jobPreview}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <Text style={styles.companyName}>{job.company}</Text>
          <View style={styles.jobDetailsRow}>
            <View style={styles.jobDetailItem}>
              <Ionicons name="location-outline" size={16} color="#1A73E8" />
              <Text style={styles.jobDetailText}>{job.location}</Text>
            </View>
            <View style={styles.jobDetailItem}>
              <Ionicons name="cash-outline" size={16} color="#1A73E8" />
              <Text style={styles.jobDetailText}>{job.rate}</Text>
            </View>
          </View>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Application Details</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Cover Letter</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Tell us why you're a great fit for this job"
              multiline
              numberOfLines={4}
              value={coverLetter}
              onChangeText={setCoverLetter}
            />
          </View>

          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Available for Full-Time</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#1A73E8" }}
              thumbColor={isAvailableFullTime ? "#fff" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setIsAvailableFullTime}
              value={isAvailableFullTime}
            />
          </View>

          <TouchableOpacity 
            style={styles.submitButton}
            onPress={handleSubmitApplication}
          >
            <Text style={styles.submitButtonText}>Submit Application</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginLeft: 20,
  },
  content: {
    flex: 1,
  },
  jobPreview: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  companyName: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  jobDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  jobDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobDetailText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#1A73E8',
  },
  formContainer: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  formTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  switchLabel: {
    fontSize: 14,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#1A73E8',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});