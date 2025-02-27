import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView,
  StatusBar
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function Profile() {
  const [selectedDay, setSelectedDay] = useState(10); // Default selected day (Wednesday)
  
  // Days data for availability calendar
  const days = [
    { day: 'M', date: 8, available: true },
    { day: 'T', date: 9, available: true },
    { day: 'W', date: 10, available: true },
    { day: 'T', date: 11, available: true },
    { day: 'F', date: 12, available: true },
    { day: 'S', date: 13, available: false },
    { day: 'S', date: 14, available: false },
  ];
  
  // Portfolio items with direct URLs
  const portfolioItems = [
    { id: 1, thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 2, thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 3, thumbnail: 'https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 4, thumbnail: 'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  ];
  
  // Reviews data with direct URLs for avatars
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      comment: 'Excellent work! Michael delivered the project ahead of schedule.',
      time: '2 days ago'
    },
    {
      id: 2,
      name: 'David Chen',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      comment: 'Very professional and skilled. Would definitely hire again!',
      time: '1 week ago'
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Image 
              source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }} 
              style={styles.profileImage} 
            />
            <View style={styles.availabilityBadge}>
              <Text style={styles.availabilityText}>Available Now</Text>
            </View>
          </View>
          
          <Text style={styles.profileName}>Michael Anderson <Ionicons name="checkmark-circle" size={16} color="#1DA1F2" /></Text>
          <Text style={styles.profileTitle}>Professional Video Editor & Developer</Text>
          
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={16} color="#777" />
            <Text style={styles.locationText}>San Francisco, CA</Text>
          </View>
          
          <View style={styles.ratingContainer}>
            <View style={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Ionicons key={star} name="star" size={18} color="#FFD700" />
              ))}
            </View>
            <Text style={styles.ratingText}>4.9 (128 reviews)</Text>
          </View>
          
          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>98%</Text>
              <Text style={styles.statLabel}>Success Rate</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{'<1hr'}</Text>
              <Text style={styles.statLabel}>Response Time</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>234</Text>
              <Text style={styles.statLabel}>Completed Jobs</Text>
            </View>
          </View>
          
          {/* Booking Options */}
          <View style={styles.bookingContainer}>
            <View style={styles.rateContainer}>
              <Text style={styles.rateLabel}>Hourly Rate</Text>
              <Text style={styles.rateValue}>$45<Text style={styles.rateUnit}>/hour</Text></Text>
              <TouchableOpacity style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rateContainer}>
              <Text style={styles.rateLabel}>Daily Rate</Text>
              <Text style={styles.rateValue}>$320<Text style={styles.rateUnit}>/day</Text></Text>
              <TouchableOpacity style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            <TouchableOpacity style={styles.skillBadge}>
              <Text style={styles.skillText}>Video Editing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skillBadge}>
              <Text style={styles.skillText}>Motion Graphics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skillBadge}>
              <Text style={styles.skillText}>React Development</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skillBadge}>
              <Text style={styles.skillText}>Python</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skillBadge}>
              <Text style={styles.skillText}>Adobe Suite</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skillBadge}>
              <Text style={styles.skillText}>Final Cut Pro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skillBadge}>
              <Text style={styles.skillText}>UI Design</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          
          <View style={styles.experienceItem}>
            <View style={styles.experienceIconContainer}>
              <Feather name="edit-2" size={14} color="#666" />
            </View>
            <View style={styles.experienceContent}>
              <Text style={styles.experienceTitle}>Senior Video Editor</Text>
              <Text style={styles.experienceCompany}>CreativeStudio</Text>
              <Text style={styles.experiencePeriod}>2020 - Present</Text>
            </View>
          </View>
          
          <View style={styles.experienceItem}>
            <View style={styles.experienceIconContainer}>
              <Feather name="code" size={14} color="#666" />
            </View>
            <View style={styles.experienceContent}>
              <Text style={styles.experienceTitle}>Freelance Developer</Text>
              <Text style={styles.experienceCompany}>Self-employed</Text>
              <Text style={styles.experiencePeriod}>2018 - 2020</Text>
            </View>
          </View>
          
          <View style={styles.experienceItem}>
            <View style={styles.experienceIconContainer}>
              <Feather name="briefcase" size={14} color="#666" />
            </View>
            <View style={styles.experienceContent}>
              <Text style={styles.experienceTitle}>Motion Designer</Text>
              <Text style={styles.experienceCompany}>TechCorp</Text>
              <Text style={styles.experiencePeriod}>2016 - 2018</Text>
            </View>
          </View>
        </View>
        
        {/* Portfolio */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Portfolio</Text>
          </View>
          
          <View style={styles.portfolioGrid}>
            {portfolioItems.map((item) => (
              <TouchableOpacity key={item.id} style={styles.portfolioItem}>
                <Image source={{ uri: item.thumbnail }} style={styles.portfolioThumbnail} />
                <View style={styles.playIconContainer}>
                  <Ionicons name="play-circle" size={36} color="white" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        {/* Reviews */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Reviews</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          
          {reviews.map((review) => (
            <View key={review.id} style={styles.reviewItem}>
              <Image source={{ uri: review.avatar }} style={styles.reviewAvatar} />
              <View style={styles.reviewContent}>
                <View style={styles.reviewHeader}>
                  <Text style={styles.reviewerName}>{review.name}</Text>
                  <Text style={styles.reviewTime}>{review.time}</Text>
                </View>
                <View style={styles.reviewStars}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Ionicons key={star} name="star" size={14} color="#FFD700" />
                  ))}
                </View>
                <Text style={styles.reviewText}>{review.comment}</Text>
              </View>
            </View>
          ))}
        </View>
        
        {/* Availability */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Availability</Text>
          
          <View style={styles.calendarContainer}>
            <View style={styles.daysRow}>
              {days.map((day) => (
                <TouchableOpacity 
                  key={day.date} 
                  style={[
                    styles.dayItem, 
                    day.available ? styles.dayAvailable : styles.dayUnavailable,
                    selectedDay === day.date && styles.daySelected
                  ]}
                  onPress={() => day.available && setSelectedDay(day.date)}
                >
                  <Text style={styles.dayText}>{day.day}</Text>
                  <Text style={[
                    styles.dateText, 
                    selectedDay === day.date && styles.dateTextSelected
                  ]}>{day.date}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.availabilityNote}>
              <View style={styles.availabilityDot} />
              <Text style={styles.availabilityNoteText}>Available on weekdays</Text>
            </View>
          </View>
        </View>
        
        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.hireButton}>
            <Text style={styles.hireButtonText}>Hire Now</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.messageButton}>
            <Ionicons name="chatbubble-outline" size={20} color="#444" />
            <Text style={styles.messageButtonText}>Message</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e1e1e1',
  },
  availabilityBadge: {
    position: 'absolute',
    bottom: -5,
    backgroundColor: '#10B981',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  availabilityText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 4,
  },
  profileTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  locationText: {
    fontSize: 14,
    color: '#777',
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  stars: {
    flexDirection: 'row',
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#555',
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#F5F7FA',
    borderRadius: 8,
    padding: 12,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#DDE1E6',
    height: '80%',
    alignSelf: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  bookingContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 16,
    justifyContent: 'space-between',
  },
  rateContainer: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  rateLabel: {
    fontSize: 12,
    color: '#666',
  },
  rateValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
  rateUnit: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#666',
  },
  bookButton: {
    backgroundColor: '#2563EB',
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  bookButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  section: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillBadge: {
    backgroundColor: '#F1F5F9',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    color: '#64748B',
    fontSize: 14,
  },
  experienceItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  experienceIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  experienceContent: {
    flex: 1,
  },
  experienceTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  experienceCompany: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  experiencePeriod: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  portfolioGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
  },
  portfolioItem: {
    width: '50%',
    padding: 6,
    position: 'relative',
  },
  portfolioThumbnail: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 8,
    backgroundColor: '#e1e1e1',
  },
  playIconContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -18 }, { translateY: -18 }],
  },
  seeAllText: {
    color: '#2563EB',
    fontSize: 14,
  },
  reviewItem: {
    flexDirection: 'row',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  reviewAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: '#e1e1e1',
  },
  reviewContent: {
    flex: 1,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: '600',
  },
  reviewTime: {
    fontSize: 12,
    color: '#888',
  },
  reviewStars: {
    flexDirection: 'row',
    marginTop: 4,
  },
  reviewText: {
    fontSize: 14,
    color: '#444',
    marginTop: 6,
    lineHeight: 20,
  },
  calendarContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 16,
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayItem: {
    width: 40,
    height: 64,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayAvailable: {
    backgroundColor: '#F1F5F9',
  },
  dayUnavailable: {
    backgroundColor: '#EDF2F7',
    opacity: 0.6,
  },
  daySelected: {
    backgroundColor: '#10B981',
  },
  dayText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#64748B',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#1E293B',
  },
  dateTextSelected: {
    color: 'white',
  },
  availabilityNote: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  availabilityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#64748B',
    marginRight: 8,
  },
  availabilityNoteText: {
    fontSize: 14,
    color: '#64748B',
  },
  actionButtonsContainer: {
    padding: 20,
  },
  hireButton: {
    backgroundColor: '#2563EB',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  hireButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  messageButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 8,
    paddingVertical: 16,
  },
  messageButtonText: {
    color: '#444',
    fontWeight: '500',
    marginLeft: 8,
    fontSize: 16,
  },
});