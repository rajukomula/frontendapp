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
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>JobFinder</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search jobs..."
          placeholderTextColor="#888"
        />
      </View>

      {/* Filters Section */}
      <View style={styles.filtersSection}>
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

      {/* Jobs List */}
      <View style={styles.jobsContainer}>
        <Text style={styles.sectionTitle}>Available Part-Time Jobs</Text>
        <View style={styles.jobList}>
          {/* Job Item */}
          <View style={styles.jobItem}>
            <Text style={styles.jobTitle}>Part-Time Sales Associate at XYZ Store</Text>
            <Text style={styles.jobDetails}>Location: New York, NY | Skills: Customer Service, Sales | Experience: 1+ years</Text>
          </View>
          <View style={styles.jobItem}>
            <Text style={styles.jobTitle}>Freelance Graphic Designer</Text>
            <Text style={styles.jobDetails}>Location: Remote | Skills: Adobe Photoshop, Illustrator | Experience: 2+ years</Text>
          </View>
          {/* Add more job items here */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F3F2EF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0073B1',
    flex: 1,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginLeft: 10,
    flex: 2,
  },
  filtersSection: {
    marginBottom: 20,
  },
  fieldInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: '#0073B1',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  jobsContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  jobList: {
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  jobItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0073B1',
  },
  jobDetails: {
    fontSize: 14,
    color: '#555',
  },
});

export default HomePage;
