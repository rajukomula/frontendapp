import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HomePage = () => {
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');

  const handleSearch = () => {
    // Handle search logic here
    console.log('Searching for jobs with:', { location, skills, experience });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>AppName</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search jobs..."
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.searchFields}>
        <TextInput
          style={styles.fieldInput}
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
        />
        <TextInput
          style={styles.fieldInput}
          placeholder="Skills"
          value={skills}
          onChangeText={setSkills}
        />
        <TextInput
          style={styles.fieldInput}
          placeholder="Experience"
          value={experience}
          onChangeText={setExperience}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.jobsContainer}>
        <Text style={styles.sectionTitle}>Available Part-Time Jobs</Text>
        <View style={styles.jobList}>
          {/* Repeat this View for each available job */}
          <View style={styles.jobItem}>
            <Text style={styles.jobTitle}>Part-Time Sales Associate at XYZ Store</Text>
            <Text style={styles.jobDetails}>Location: New York, NY | Skills: Customer Service, Sales | Experience: 1+ years</Text>
          </View>
          <View style={styles.jobItem}>
            <Text style={styles.jobTitle}>Freelance Graphic Designer</Text>
            <Text style={styles.jobDetails}>Location: Remote | Skills: Adobe Photoshop, Illustrator | Experience: 2+ years</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#E2DFD2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    flex: 1,
  },
  searchInput: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginLeft: 10,
    flex: 2,
  },
  searchFields: {
    marginBottom: 20,
  },
  fieldInput: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
  },
  jobsContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  jobList: {
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  jobItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  jobDetails: {
    fontSize: 14,
    color: '#555',
  },
});

export default HomePage;
