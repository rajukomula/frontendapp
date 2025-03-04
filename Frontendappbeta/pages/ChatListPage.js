import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  FlatList,
  TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChatListPage({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [chats] = useState([
    {
      id: '1',
      name: 'CreativeStudio HR',
      lastMessage: 'Your application looks promising...',
      time: '2h ago',
      unread: 2,
      image: { uri: 'https://via.placeholder.com/50' },
      job: 'Video Editor'
    },
    {
      id: '2',
      name: 'TechCorp Recruiter',
      lastMessage: 'Can we schedule an interview?',
      time: '1d ago',
      unread: 1,
      image: { uri: 'https://via.placeholder.com/50' },
      job: 'React Developer'
    },
    {
      id: '3',
      name: 'VisualArts Team',
      lastMessage: 'We received your portfolio...',
      time: '3d ago',
      unread: 0,
      image: { uri: 'https://via.placeholder.com/50' },
      job: 'Motion Graphics'
    }
  ]);

  const renderChatItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.chatItem}
      onPress={() => navigation.navigate('ChatDetails', { chat: item })}
    >
      <Image source={item.image} style={styles.chatAvatar} />
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName}>{item.name}</Text>
          <Text style={styles.chatTime}>{item.time}</Text>
        </View>
        <View style={styles.chatMessageContainer}>
          <Text 
            style={[
              styles.chatLastMessage, 
              item.unread > 0 && styles.unreadMessage
            ]}
          >
            {item.lastMessage}
          </Text>
          {item.unread > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unread}</Text>
            </View>
          )}
        </View>
        <Text style={styles.chatJob}>{item.job} Job</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity>
          <Ionicons name="create-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#777" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search messages"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <FlatList
        data={chats}
        renderItem={renderChatItem}
        keyExtractor={item => item.id}
        style={styles.chatList}
        showsVerticalScrollIndicator={false}
      />
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
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 46,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  chatList: {
    backgroundColor: '#fff',
  },
  chatItem: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  chatAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatContent: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  chatTime: {
    fontSize: 12,
    color: '#777',
  },
  chatMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chatLastMessage: {
    fontSize: 14,
    color: '#555',
    flex: 1,
    marginRight: 10,
  },
  unreadMessage: {
    fontWeight: '600',
    color: '#333',
  },
  unreadBadge: {
    backgroundColor: '#1A73E8',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  unreadText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  chatJob: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
  },
});