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

export default function Profile2({ navigation }) {
  const [profile] = useState({
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    location: 'San Francisco, CA',
    skills: ['React Native', 'Video Editing', 'UI/UX Design', 'Motion Graphics'],
    experience: [
      {
        id: '1',
        title: 'Freelance Developer',
        company: 'Self-Employed',
        duration: 'Jan 2023 - Present',
      },
      {
        id: '2',
        title: 'Motion Graphics Designer',
        company: 'CreativeStudio',
        duration: 'Jun 2022 - Dec 2022',
      }
    ],
    education: [
      {
        id: '1',
        degree: 'Bachelor of Design',
        institution: 'Art Institute of California',
        year: '2021',
      }
    ],
    image: { uri: 'https://randomuser.me/api/portraits/men/1.jpg' }
  });

  const StatItem = ({ icon, label, value }) => (
    <View style={styles.statItem}>
      <Ionicons name={icon} size={24} color="#1A73E8" />
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );

  const SectionHeader = ({ title, onSeeAll }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {onSeeAll && (
        <TouchableOpacity onPress={onSeeAll}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Ionicons name="create-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileHeader}>
          <Image 
            source={profile.image} 
            style={styles.profileImage} 
          />
          <Text style={styles.profileName}>{profile.name}</Text>
          <Text style={styles.profileEmail}>{profile.email}</Text>
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={16} color="#777" />
            <Text style={styles.locationText}>{profile.location}</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <StatItem icon="briefcase-outline" label="Jobs" value="12" />
          <StatItem icon="people-outline" label="Connections" value="42" />
          <StatItem icon="trophy-outline" label="Completed" value="8" />
        </View>

        <View style={styles.sectionContainer}>
          <SectionHeader title="Skills" />
          <View style={styles.skillsContainer}>
            {profile.skills.map((skill, index) => (
              <View key={index} style={styles.skillBadge}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <SectionHeader 
            title="Experience" 
            onSeeAll={() => {/* Navigate to full experience */}}
          />
          {profile.experience.map(exp => (
            <View key={exp.id} style={styles.experienceItem}>
              <Text style={styles.experienceTitle}>{exp.title}</Text>
              <Text style={styles.experienceCompany}>{exp.company}</Text>
              <Text style={styles.experienceDuration}>{exp.duration}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionContainer}>
          <SectionHeader 
            title="Education" 
            onSeeAll={() => {/* Navigate to full education */}}
          />
          {profile.education.map(edu => (
            <View key={edu.id} style={styles.educationItem}>
              <Text style={styles.educationDegree}>{edu.degree}</Text>
              <Text style={styles.educationInstitution}>{edu.institution}</Text>
              <Text style={styles.educationYear}>{edu.year}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Download Resume</Text>
        </TouchableOpacity>
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
    justifyContent: 'space-between',
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
  },
  content: {
    flex: 1,
  },
  profileHeader: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    color: '#777',
    marginLeft: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 15,
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 3,
  },
  sectionContainer: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  seeAllText: {
    fontSize: 14,
    color: '#1A73E8',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillBadge: {
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 5,
    marginBottom: 5,
  },
  skillText: {
    fontSize: 12,
    color: '#555',
  },
  experienceItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingBottom: 15,
  },
  experienceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  experienceCompany: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  experienceDuration: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
  },
  educationItem: {
    marginBottom: 15,
  },
  educationDegree: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  educationInstitution: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  educationYear: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
  },
  actionButton: {
    backgroundColor: '#1A73E8',
    borderRadius: 10,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});