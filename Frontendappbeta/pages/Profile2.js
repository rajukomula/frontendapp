import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DailyWageProfile({ navigation }) {
  const [profile] = useState({
    name: 'Rahul Sharma',
    jobType: 'Plumber',
    email: 'rahul.sharma@example.com',
    phone: '+91 9876543210',
    location: 'Mumbai, India',
    availability: 'Available for daily & weekly work',
    rates: {
      hourly: '₹250/hr',
      daily: '₹1800/day',
      weekly: '₹10000/week',
    },
    skills: ['Pipe Fitting', 'Leak Repair', 'Water Heater Installation', 'Drain Cleaning'],
    experience: [
      {
        id: '1',
        title: 'Freelance Plumber',
        company: 'Self-Employed',
        duration: 'Feb 2021 - Present',
      },
      {
        id: '2',
        title: 'Plumbing Technician',
        company: 'QuickFix Services',
        duration: 'Jan 2019 - Jan 2021',
      }
    ],
    pastJobs: [
      {
        id: '1',
        client: 'Mr. Rajesh Gupta',
        job: 'Bathroom Pipe Fixing',
        rating: '⭐⭐⭐⭐⭐',
      },
      {
        id: '2',
        client: 'Mrs. Priya Verma',
        job: 'Kitchen Sink Installation',
        rating: '⭐⭐⭐⭐',
      }
    ],
    reviews: [
      {
        id: '1',
        reviewer: 'Rajesh Gupta',
        comment: 'Very professional and skilled plumber! Highly recommend.',
        rating: '⭐⭐⭐⭐⭐'
      },
      {
        id: '2',
        reviewer: 'Priya Verma',
        comment: 'Fixed my kitchen sink perfectly. Will hire again!',
        rating: '⭐⭐⭐⭐'
      }
    ],
    image: { uri: 'https://randomuser.me/api/portraits/men/2.jpg' }
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Worker Profile</Text>
        <TouchableOpacity>
          <Ionicons name="create-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          <Image source={profile.image} style={styles.profileImage} />
          <Text style={styles.profileName}>{profile.name}</Text>
          <Text style={styles.profileJob}>{profile.jobType}</Text>
          <Text style={styles.profileEmail}>{profile.email}</Text>
          <Text style={styles.profilePhone}>{profile.phone}</Text>
          <Text style={styles.profileLocation}>{profile.location}</Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Availability</Text>
          <Text style={styles.text}>{profile.availability}</Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Rates</Text>
          <Text style={styles.text}>Hourly: {profile.rates.hourly}</Text>
          <Text style={styles.text}>Daily: {profile.rates.daily}</Text>
          <Text style={styles.text}>Weekly: {profile.rates.weekly}</Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {profile.skills.map((skill, index) => (
              <View key={index} style={styles.skillBadge}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {profile.experience.map(exp => (
            <View key={exp.id} style={styles.experienceItem}>
              <Text style={styles.experienceTitle}>{exp.title}</Text>
              <Text style={styles.experienceCompany}>{exp.company}</Text>
              <Text style={styles.experienceDuration}>{exp.duration}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Past Jobs</Text>
          {profile.pastJobs.map(job => (
            <View key={job.id} style={styles.pastJobItem}>
              <Text style={styles.clientName}>{job.client}</Text>
              <Text style={styles.jobTitle}>{job.job}</Text>
              <Text style={styles.rating}>{job.rating}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Reviews</Text>
          {profile.reviews.map(review => (
            <View key={review.id} style={styles.reviewItem}>
              <Text style={styles.reviewer}>{review.reviewer}</Text>
              <Text style={styles.comment}>{review.comment}</Text>
              <Text style={styles.rating}>{review.rating}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadText}>Download Resume</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  headerTitle: { fontSize: 18, fontWeight: '600', color: '#333' },
  profileHeader: { alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 15 },
  profileName: { fontSize: 20, fontWeight: '600', color: '#333' },
  profileJob: { fontSize: 16, color: '#777' },
  sectionContainer: { backgroundColor: '#fff', margin: 10, padding: 15 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 10 },
  text: { fontSize: 14, color: '#555' },
  downloadButton: { backgroundColor: '#1A73E8', padding: 15, margin: 20, borderRadius: 10, alignItems: 'center' },
  downloadText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});