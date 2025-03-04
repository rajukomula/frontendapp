import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  TextInput,
  FlatList
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample job categories
  const categories = [
    { id: '1', name: 'Video Editing', icon: 'videocam' },
    { id: '2', name: 'Development', icon: 'code' },
    { id: '3', name: 'Design', icon: 'brush' },
    { id: '4', name: 'Motion Graphics', icon: 'movie' },
    { id: '5', name: 'UI/UX', icon: 'desktop' },
  ];
  
  // Sample job listings based on the profile page style
  const jobListings = [
    {
      id: '1',
      title: 'Video Editor Needed',
      company: 'CreativeStudio',
      location: 'San Francisco, CA',
      rate: '$45/hour',
      rating: 4.8,
      skills: ['Video Editing', 'Adobe Suite'],
      image: { uri: 'https://via.placeholder.com/50' }, // Replace with any actual image URL
    },
    {
      id: '2',
      title: 'React Developer',
      company: 'TechCorp',
      location: 'Remote',
      rate: '$50/hour',
      rating: 4.7,
      skills: ['React', 'JavaScript'],
      image: { uri: 'https://via.placeholder.com/50' },
    },
    {
      id: '3',
      title: 'Motion Designer',
      company: 'VisualArts',
      location: 'Los Angeles, CA',
      rate: '$40/hour',
      rating: 4.9,
      skills: ['Motion Graphics', 'After Effects'],
      image: { uri: 'https://via.placeholder.com/50' },
    },
  ];
  
  // Render a job card similar to the profile view
  const renderJobCard = ({ item }) => (
    <TouchableOpacity style={styles.jobCard}>
      <Image source={item.image} style={styles.companyLogo} />
      <View style={styles.jobInfo}>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <Text style={styles.companyName}>{item.company}</Text>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={16} color="#777" />
          <Text style={styles.locationText}>{item.location}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Ionicons
                key={star}
                name={star <= Math.floor(item.rating) ? "star" : "star-outline"}
                size={16}
                color="#FFD700"
              />
            ))}
          </View>
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
        <View style={styles.skillsContainer}>
          {item.skills.map((skill, index) => (
            <View key={index} style={styles.skillBadge}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.rateContainer}>
        <Text style={styles.rateLabel}>Hourly Rate</Text>
        <Text style={styles.rateAmount}>{item.rate}</Text>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  // Render category item
  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <View style={styles.categoryIconContainer}>
        <Ionicons name={item.icon} size={22} color="#fff" />
      </View>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image 
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} 
            style={styles.profilePic} 
          />
          <View>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.userName}>Michael</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#777" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for jobs..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Featured Jobs */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Jobs</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          {jobListings.map(job => renderJobCard({ item: job }))}
        </View>

        {/* Recent Jobs */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Jobs</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          {jobListings.slice().reverse().map(job => renderJobCard({ item: job }))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#1A73E8" />
          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="briefcase-outline" size={24} color="#777" />
          <Text style={styles.navText}>Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble-outline" size={24} color="#777" />
          <Text style={styles.navText}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#777" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
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
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  welcomeText: {
    fontSize: 14,
    color: '#777',
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 46,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  filterButton: {
    width: 46,
    height: 46,
    borderRadius: 10,
    backgroundColor: '#1A73E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  seeAllText: {
    fontSize: 14,
    color: '#1A73E8',
  },
  categoriesList: {
    paddingRight: 20,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 16,
    width: 80,
  },
  categoryIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1A73E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  jobCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  companyLogo: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  companyName: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  locationText: {
    fontSize: 12,
    color: '#777',
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  stars: {
    flexDirection: 'row',
    marginRight: 5,
  },
  ratingText: {
    fontSize: 12,
    color: '#777',
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
    fontSize: 10,
    color: '#555',
  },
  rateContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  rateLabel: {
    fontSize: 10,
    color: '#777',
  },
  rateAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A73E8',
    marginBottom: 15,
  },
  applyButton: {
    backgroundColor: '#1A73E8',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: '#777',
  },
  activeNavText: {
    color: '#1A73E8',
  },
});