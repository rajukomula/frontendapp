import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  FlatList 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchPage({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([
    'React Developer',
    'Video Editor',
    'Graphic Design',
    'Motion Graphics'
  ]);

  const [popularCategories] = useState([
    { id: '1', name: 'Development', icon: 'code-outline' },
    { id: '2', name: 'Design', icon: 'brush-outline' },
    { id: '3', name: 'Video', icon: 'videocam-outline' },
    { id: '4', name: 'Marketing', icon: 'megaphone-outline' },
  ]);

  const renderRecentSearch = ({ item }) => (
    <TouchableOpacity 
      style={styles.recentSearchItem}
      onPress={() => {
        setSearchQuery(item);
        // Perform search
      }}
    >
      <Ionicons name="time-outline" size={20} color="#777" />
      <Text style={styles.recentSearchText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderCategory = ({ item }) => (
    <TouchableOpacity 
      style={styles.categoryItem}
      onPress={() => {
        // Navigate to jobs in this category
      }}
    >
      <View style={styles.categoryIconContainer}>
        <Ionicons name={item.icon} size={22} color="#fff" />
      </View>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={20} color="#777" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for jobs..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={() => {
              // Perform search
            }}
          />
          {searchQuery ? (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color="#777" />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Recent Searches</Text>
        <FlatList
          data={recentSearches}
          renderItem={renderRecentSearch}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Popular Categories</Text>
        <FlatList
          data={popularCategories}
          renderItem={renderCategory}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <TouchableOpacity 
        style={styles.filterButton}
        onPress={() => {
          // Open advanced filters
        }}
      >
        <Ionicons name="options-outline" size={20} color="#fff" />
        <Text style={styles.filterButtonText}>Advanced Filters</Text>
      </TouchableOpacity>
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
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginLeft: 15,
    height: 46,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  recentSearchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
  },
  recentSearchText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
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
  filterButton: {
    flexDirection: 'row',
    backgroundColor: '#1A73E8',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});