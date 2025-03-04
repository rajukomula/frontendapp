import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';

export default function JobDetailsPage({ route, navigation }) {
  // Sample job data for testing
  const sampleJob = {
    title: 'Editor',
    company: 'Media Solutions',
    location: 'Remote / On-site (NYC)',
    rates: {
      hourly: '$30/hr',
      daily: '$200/day',
      weekly: '$1000/week',
    },
    workSchedule: 'Flexible hours, deadline-based',
    image: { uri: 'https://via.placeholder.com/100' },
    skills: ['Copy Editing', 'Proofreading', 'SEO Writing', 'Adobe InDesign'],
    responsibilities: [
      'Review and edit written content for clarity and accuracy.',
      'Ensure grammatical and stylistic consistency.',
      'Collaborate with writers and content strategists.',
      'Format articles for digital publication.',
      'Manage content revisions based on client feedback.',
    ],
    paymentMethods: ['Bank Transfer', 'PayPal', 'Crypto'],
  };

  // Use passed job or default sample data
  const job = route?.params?.job || sampleJob;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>⬅ Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Job Details</Text>
        <TouchableOpacity>
          <Text style={styles.shareText}>🔗 Share</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.jobHeader}>
          <Image source={job.image} style={styles.companyLogo} />
          <View style={styles.jobTitleContainer}>
            <Text style={styles.jobTitle}>{job.title}</Text>
            <Text style={styles.companyName}>{job.company}</Text>
          </View>
        </View>

        <View style={styles.jobDetailsSection}>
          <Text style={styles.detailText}>📍 {job.location}</Text>
          <Text style={styles.detailText}>💰 {job.rates.hourly} | {job.rates.daily} | {job.rates.weekly}</Text>
          <Text style={styles.detailText}>⏳ {job.workSchedule}</Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Job Responsibilities</Text>
          {job.responsibilities.map((task, index) => (
            <Text key={index} style={styles.descriptionText}>• {task}</Text>
          ))}
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Required Skills</Text>
          <View style={styles.skillsContainer}>
            {job.skills.map((skill, index) => (
              <View key={index} style={styles.skillBadge}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Payment Methods</Text>
          {job.paymentMethods.map((method, index) => (
            <Text key={index} style={styles.descriptionText}>• {method}</Text>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.buttonText}>Save Job</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.buttonText}>Contact Employer</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.applyButton}
          onPress={() => navigation.navigate('JobApplication', { job })}
        >
          <Text style={styles.applyButtonText}>Apply Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 60, paddingBottom: 20, backgroundColor: '#fff' },
  backText: { fontSize: 16, color: '#007AFF' },
  shareText: { fontSize: 16, color: '#007AFF' },
  headerTitle: { fontSize: 18, fontWeight: '600', color: '#333' },
  content: { flex: 1 },
  jobHeader: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 20, backgroundColor: '#fff' },
  companyLogo: { width: 60, height: 60, borderRadius: 10, marginRight: 15 },
  jobTitleContainer: { flex: 1 },
  jobTitle: { fontSize: 18, fontWeight: '600', color: '#333', marginBottom: 4 },
  companyName: { fontSize: 14, color: '#555' },
  jobDetailsSection: { backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 15, marginTop: 10 },
  detailText: { fontSize: 14, color: '#333', marginBottom: 8 },
  sectionContainer: { backgroundColor: '#fff', marginTop: 10, paddingHorizontal: 20, paddingVertical: 15 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 10 },
  descriptionText: { fontSize: 14, color: '#555', lineHeight: 22 },
  skillsContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  skillBadge: { backgroundColor: '#F0F0F0', borderRadius: 12, paddingHorizontal: 8, paddingVertical: 4, marginRight: 5, marginBottom: 5 },
  skillText: { fontSize: 12, color: '#555' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 20 },
  saveButton: { flex: 1, backgroundColor: '#FFD700', borderRadius: 10, paddingVertical: 12, alignItems: 'center', marginRight: 10 },
  contactButton: { flex: 1, backgroundColor: '#1E90FF', borderRadius: 10, paddingVertical: 12, alignItems: 'center' },
  applyButton: { backgroundColor: '#1A73E8', borderRadius: 10, paddingVertical: 15, marginHorizontal: 20, marginTop: 20, marginBottom: 40, alignItems: 'center' },
  applyButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
