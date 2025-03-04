import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function JobsPage({ navigation }) {
  const jobs = [
    { id: '1', title: 'Tea Master', company: 'Chai Wale', location: 'Begumpet, Hyderabad', wage: '₹500/day', postedTime: '3 hours ago', type: 'Daily Wage', image: { uri: 'https://via.placeholder.com/100' } },
    { id: '2', title: 'Pan Shop Helper', company: 'Raju Pan Shop', location: 'Ameerpet, Hyderabad', wage: '₹400/day', postedTime: '1 hour ago', type: 'Daily Wage', image: { uri: 'https://via.placeholder.com/100' } },
    { id: '3', title: 'Biryani Packing Boy', company: 'Bawarchi Hotel', location: 'RTC X Roads, Hyderabad', wage: '₹600/day', postedTime: '2 hours ago', type: 'Daily Wage', image: { uri: 'https://via.placeholder.com/100' } },
    { id: '4', title: 'Auto Garage Helper', company: 'Mohan Auto Works', location: 'Kukatpally, Hyderabad', wage: '₹550/day', postedTime: '4 hours ago', type: 'Daily Wage', image: { uri: 'https://via.placeholder.com/100' } },
    { id: '5', title: 'Kirana Store Assistant', company: 'Balaji Kirana', location: 'LB Nagar, Hyderabad', wage: '₹500/day', postedTime: '5 hours ago', type: 'Daily Wage', image: { uri: 'https://via.placeholder.com/100' } },
    { id: '6', title: 'Hotel Cleaning Staff', company: 'Sai Tiffins', location: 'Dilsukhnagar, Hyderabad', wage: '₹450/day', postedTime: '6 hours ago', type: 'Daily Wage', image: { uri: 'https://via.placeholder.com/100' } },
    { id: '7', title: 'Swiggy Delivery Boy', company: 'Swiggy', location: 'Gachibowli, Hyderabad', wage: '₹800/day', postedTime: '7 hours ago', type: 'Daily Wage / Part-time', image: { uri: 'https://via.placeholder.com/100' } },
    { id: '8', title: 'Amazon Warehouse Loader', company: 'Amazon India', location: 'Shamshabad, Hyderabad', wage: '₹900/day', postedTime: '8 hours ago', type: 'Daily Wage', image: { uri: 'https://via.placeholder.com/100' } },
    { id: '9', title: 'Construction Labour', company: 'TS Constructions', location: 'Mehdipatnam, Hyderabad', wage: '₹750/day', postedTime: '9 hours ago', type: 'Daily Wage', image: { uri: 'https://via.placeholder.com/100' } },
    { id: '10', title: 'Watchman / Security Guard', company: 'AP Security Services', location: 'Madhapur, Hyderabad', wage: '₹700/day', postedTime: '10 hours ago', type: 'Daily Wage', image: { uri: 'https://via.placeholder.com/100' } },
    { id: '11', title: 'Juice Shop Helper', company: 'Fresh Juice Center', location: 'Secunderabad, Hyderabad', wage: '₹450/day', postedTime: '1 day ago', type: 'Daily Wage', image: { uri: 'https://via.placeholder.com/100' } },
    { id: '12', title: 'Catering Worker', company: 'Paradise Caterers', location: 'Charminar, Hyderabad', wage: '₹600/day', postedTime: '1 day ago', type: 'Daily Wage', image: { uri: 'https://via.placeholder.com/100' } },
    { id: '13', title: 'Hospital Ward Boy', company: 'Yashoda Hospital', location: 'Somajiguda, Hyderabad', wage: '₹550/day', postedTime: '2 days ago', type: 'Daily Wage', image: { uri: 'https://via.placeholder.com/100' } },
    { id: '14', title: 'Salon Assistant', company: 'Green Trends', location: 'Ameerpet, Hyderabad', wage: '₹500/day', postedTime: '2 days ago', type: 'Daily Wage', image: { uri: 'https://via.placeholder.com/100' } },
    { id: '15', title: 'Petrol Bunk Helper', company: 'Indian Oil', location: 'Miyapur, Hyderabad', wage: '₹600/day', postedTime: '2 days ago', type: 'Daily Wage', image: { uri: 'https://via.placeholder.com/100' } },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Jobs in Hyderabad</Text>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.jobCard} 
            onPress={() => navigation.navigate('JobDetailsPage', { job: item })}
          >
            <Image source={item.image} style={styles.jobImage} />
            <View style={styles.jobInfo}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text style={styles.companyName}>{item.company}</Text>
              <View style={styles.detailRow}>
                <Ionicons name="location-outline" size={16} color="#1A73E8" />
                <Text style={styles.detailText}>{item.location}</Text>
              </View>
              <View style={styles.detailRow}>
                <Ionicons name="cash-outline" size={16} color="#1A73E8" />
                <Text style={styles.detailText}>{item.wage}</Text>
              </View>
              <Text style={styles.postedTime}>Posted {item.postedTime}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', paddingTop: 50 },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, color: '#333' },
  listContent: { paddingHorizontal: 15, paddingBottom: 20 },
  jobCard: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, padding: 15, marginBottom: 10, alignItems: 'center' },
  jobImage: { width: 60, height: 60, borderRadius: 10, marginRight: 15 },
  jobInfo: { flex: 1 },
  jobTitle: { fontSize: 16, fontWeight: '600', color: '#333' },
  companyName: { fontSize: 14, color: '#555', marginBottom: 5 },
  detailRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 3 },
  detailText: { marginLeft: 5, fontSize: 14, color: '#333' },
  postedTime: { fontSize: 12, color: '#777', marginTop: 5 },
});

