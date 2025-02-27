// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
// import axios from 'axios';
// import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

// const API_URL = 'https://your-api-endpoint.com/user-profile'; // Replace with actual API URL

// const UserProfile = () => {
//     const [userData, setUserData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchUserProfile();
//     }, []);

//     const fetchUserProfile = async () => {
//         try {
//             const response = await axios.get(API_URL);
//             setUserData(response.data);
//         } catch (error) {
//             console.error('Error fetching user profile:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (loading) {
//         return (
//             <View style={styles.loaderContainer}>
//                 <ActivityIndicator size="large" color="#007bff" />
//                 <Text style={styles.loadingText}>Loading profile...</Text>
//             </View>
//         );
//     }

//     return (
//         <ScrollView style={styles.container}>
//             {/* Profile Header */}
//             <View style={styles.header}>
//                 <Image source={{ uri: userData.profileImage }} style={styles.profileImage} />
//                 <Text style={styles.userName}>{userData.name}</Text>
//                 <Text style={styles.userTitle}>{userData.title}</Text>
//                 <View style={styles.locationContainer}>
//                     <Ionicons name="location-outline" size={16} color="#777" />
//                     <Text style={styles.locationText}>{userData.location}</Text>
//                 </View>
//                 <Text style={styles.rating}>
//                     ⭐ {userData.rating} ({userData.reviewsCount} reviews)
//                 </Text>
//             </View>

//             {/* Stats */}
//             <View style={styles.statsContainer}>
//                 <View style={styles.statBox}>
//                     <Text style={styles.statValue}>{userData.successRate}%</Text>
//                     <Text style={styles.statLabel}>Success Rate</Text>
//                 </View>
//                 <View style={styles.statBox}>
//                     <Text style={styles.statValue}>{userData.responseTime}</Text>
//                     <Text style={styles.statLabel}>Response Time</Text>
//                 </View>
//                 <View style={styles.statBox}>
//                     <Text style={styles.statValue}>{userData.completedJobs}</Text>
//                     <Text style={styles.statLabel}>Completed Jobs</Text>
//                 </View>
//             </View>

//             {/* Rates */}
//             <View style={styles.ratesContainer}>
//                 <View style={styles.rateBox}>
//                     <Text style={styles.ratePrice}>${userData.hourlyRate}/hour</Text>
//                     <TouchableOpacity style={styles.bookButton}><Text style={styles.bookText}>Book Now</Text></TouchableOpacity>
//                 </View>
//                 <View style={styles.rateBox}>
//                     <Text style={styles.ratePrice}>${userData.dailyRate}/day</Text>
//                     <TouchableOpacity style={styles.bookButton}><Text style={styles.bookText}>Book Now</Text></TouchableOpacity>
//                 </View>
//             </View>

//             {/* Skills */}
//             <Text style={styles.sectionTitle}>Skills</Text>
//             <FlatList
//                 data={userData.skills}
//                 horizontal
//                 renderItem={({ item }) => <Text style={styles.skillBadge}>{item}</Text>}
//                 keyExtractor={(item, index) => index.toString()}
//             />

//             {/* Experience */}
//             <Text style={styles.sectionTitle}>Experience</Text>
//             {userData.experience.map((job, index) => (
//                 <View key={index} style={styles.experienceItem}>
//                     <MaterialIcons name="work" size={20} color="#007bff" />
//                     <View style={styles.experienceTextContainer}>
//                         <Text style={styles.jobTitle}>{job.title}</Text>
//                         <Text style={styles.companyName}>{job.company}</Text>
//                         <Text style={styles.jobDuration}>{job.duration}</Text>
//                     </View>
//                 </View>
//             ))}

//             {/* Portfolio */}
//             <Text style={styles.sectionTitle}>Portfolio</Text>
//             <FlatList
//                 data={userData.portfolio}
//                 numColumns={2}
//                 renderItem={({ item }) => (
//                     <Image source={{ uri: item.image }} style={styles.portfolioImage} />
//                 )}
//                 keyExtractor={(item, index) => index.toString()}
//             />

//             {/* Reviews */}
//             <Text style={styles.sectionTitle}>Recent Reviews</Text>
//             {userData.reviews.map((review, index) => (
//                 <View key={index} style={styles.reviewItem}>
//                     <FontAwesome name="user-circle" size={24} color="#777" />
//                     <View style={styles.reviewTextContainer}>
//                         <Text style={styles.reviewUser}>{review.name}</Text>
//                         <Text style={styles.reviewText}>{review.comment}</Text>
//                     </View>
//                 </View>
//             ))}

//             {/* Buttons */}
//             <TouchableOpacity style={styles.hireButton}><Text style={styles.hireText}>Hire Now</Text></TouchableOpacity>
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: '#fff', padding: 15 },
//     loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//     loadingText: { marginTop: 10, fontSize: 16, color: '#555' },
//     header: { alignItems: 'center', marginBottom: 15 },
//     profileImage: { width: 100, height: 100, borderRadius: 50 },
//     userName: { fontSize: 22, fontWeight: 'bold' },
//     userTitle: { color: '#777', fontSize: 14 },
//     locationContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
//     locationText: { color: '#777', fontSize: 14, marginLeft: 4 },
//     rating: { fontSize: 16, marginTop: 5 },
//     statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
//     statBox: { alignItems: 'center', flex: 1 },
//     statValue: { fontSize: 18, fontWeight: 'bold' },
//     statLabel: { fontSize: 12, color: '#777' },
//     ratesContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
//     rateBox: { alignItems: 'center', flex: 1 },
//     ratePrice: { fontSize: 18, fontWeight: 'bold' },
//     bookButton: { backgroundColor: '#007bff', padding: 10, borderRadius: 5, marginTop: 5 },
//     bookText: { color: '#fff', fontWeight: 'bold' },
//     sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 15 },
//     skillBadge: { backgroundColor: '#f1f1f1', padding: 8, borderRadius: 5, marginRight: 5 },
//     experienceItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
//     experienceTextContainer: { marginLeft: 10 },
//     jobTitle: { fontWeight: 'bold' },
//     companyName: { color: '#777' },
//     jobDuration: { color: '#777', fontSize: 12 },
//     portfolioImage: { width: '48%', height: 100, margin: 2 },
//     reviewItem: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
//     reviewTextContainer: { marginLeft: 10 },
//     hireButton: { backgroundColor: '#007bff', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20 },
//     hireText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
// });

// export default UserProfile;
import React from 'react';
import { View, Text, Image, Button, FlatList, ScrollView, StyleSheet } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const UserProfile = () => {
  const userData = {
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    name: 'John Doe',
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    rating: 4.8,
    reviewCount: 120,
    successRate: '95%',
    responseTime: '2 hours',
    completedJobs: 50,
    hourlyRate: 50,
    dailyRate: 400,
    skills: ['JavaScript', 'React Native', 'Node.js', 'MongoDB', 'GraphQL', 'TypeScript', 'Docker', 'AWS', 'Kubernetes', 'Firebase', 'Swift', 'Kotlin'],
    experience: [
      { role: 'Senior Developer', company: 'Tech Company', years: '3 years' },
      { role: 'Junior Developer', company: 'Another Company', years: '2 years' },
    ],
    portfolio: [
      'https://source.unsplash.com/200x200?tech',
      'https://source.unsplash.com/200x200?coding',
      'https://source.unsplash.com/200x200?developer',
    ],
    reviews: [
      {
        reviewer: 'Alice',
        rating: 5,
        comment: 'Great work!',
        date: '2023-01-15',
      },
      {
        reviewer: 'Bob',
        rating: 4,
        comment: 'Very professional.',
        date: '2023-01-10',
      },
    ],
    availability: 'Available for hire',
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: userData.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{userData.name}</Text>
      <Text style={styles.title}>{userData.title}</Text>
      <View style={styles.locationContainer}>
        <MaterialIcons name="location-on" size={16} color="gray" />
        <Text style={styles.location}>{userData.location}</Text>
      </View>

      <View style={styles.ratingContainer}>
        <FontAwesome name="star" size={16} color="gold" />
        <Text style={styles.ratingText}>{userData.rating} ({userData.reviewCount} reviews)</Text>
      </View>

      <View style={styles.statsContainer}>
        <Text>✅ Success Rate: {userData.successRate}</Text>
        <Text>⏳ Response Time: {userData.responseTime}</Text>
        <Text>📌 Completed Jobs: {userData.completedJobs}</Text>
      </View>

      <Text style={styles.sectionTitle}>Skills</Text>
      <FlatList
        data={userData.skills}
        renderItem={({ item }) => <Text style={styles.skill}>{item}</Text>}
        keyExtractor={(item) => item}
        horizontal
      />

      <Text style={styles.sectionTitle}>Experience</Text>
      <FlatList
        data={userData.experience}
        renderItem={({ item }) => (
          <Text>{item.role} at {item.company} ({item.years})</Text>
        )}
        keyExtractor={(item) => item.role}
      />

      <Text style={styles.sectionTitle}>Portfolio</Text>
      <FlatList
        data={userData.portfolio}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.portfolioImage} />
        )}
        keyExtractor={(item) => item}
        horizontal
      />

      <Text style={styles.sectionTitle}>Recent Reviews</Text>
      <FlatList
        data={userData.reviews}
        renderItem={({ item }) => (
          <View style={styles.review}>
            <Text style={styles.reviewer}>{item.reviewer}</Text>
            <Text style={styles.rating}>{item.rating} ★</Text>
            <Text style={styles.comment}>{item.comment}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <Text style={styles.sectionTitle}>Availability</Text>
      <View style={styles.availabilityContainer}>
        <MaterialIcons name="check-circle" size={20} color="green" />
        <Text style={styles.availability}>{userData.availability}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Hire Now" onPress={() => {}} />
        <Button title="Message" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  location: {
    fontSize: 16,
    color: 'gray',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  statsContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  skill: {
    margin: 5,
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 4,
  },
  portfolioImage: {
    width: 150,
    height: 150,
    margin: 5,
    borderRadius: 10,
  },
  availabilityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  availability: {
    marginLeft: 5,
    fontSize: 18,
    color: 'green',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});

export default UserProfile;
