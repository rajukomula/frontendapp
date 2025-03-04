import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChatDetailsPage({ route, navigation }) {
  const { chat } = route.params;
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Hi there! I saw your application for the Video Editor position.',
      sender: 'other',
      time: '2:30 PM'
    },
    {
      id: '2',
      text: 'Hello! Yes, I\'m very interested in the role.',
      sender: 'me',
      time: '2:31 PM'
    },
    {
      id: '3',
      text: 'Can you tell me more about your experience with Adobe Premiere?',
      sender: 'other',
      time: '2:33 PM'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: (messages.length + 1).toString(),
          text: newMessage,
          sender: 'me',
          time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        }
      ]);
      setNewMessage('');
    }
  };

  const renderMessage = ({ item }) => (
    <View style={[
      styles.messageContainer, 
      item.sender === 'me' ? styles.myMessageContainer : styles.otherMessageContainer
    ]}>
      {item.sender === 'other' && (
        <Image 
          source={chat.image} 
          style={styles.senderAvatar} 
        />
      )}
      <View style={[
        styles.messageBubble, 
        item.sender === 'me' ? styles.myMessageBubble : styles.otherMessageBubble
      ]}>
        <Text style={[
          styles.messageText, 
          item.sender === 'me' ? styles.myMessageText : styles.otherMessageText
        ]}>
          {item.text}
        </Text>
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <View style={styles.headerUserInfo}>
          <Image source={chat.image} style={styles.headerAvatar} />
          <View>
            <Text style={styles.headerName}>{chat.name}</Text>
            <Text style={styles.headerSubtitle}>{chat.job} Job</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="call-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        style={styles.messagesList}
        contentContainerStyle={styles.messagesListContent}
        showsVerticalScrollIndicator={false}
        inverted
      />

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.attachmentButton}>
          <Ionicons name="attach" size={24} color="#777" />
        </TouchableOpacity>
        <TextInput
          style={styles.messageInput}
          placeholder="Type your message"
          value={newMessage}
          onChangeText={setNewMessage}
          multiline
        />
        <TouchableOpacity 
          style={styles.sendButton}
          onPress={sendMessage}
        >
          <Ionicons name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  headerUserInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 20,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#777',
  },
  messagesList: {
    flex: 1,
  },
  messagesListContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  myMessageContainer: {
    justifyContent: 'flex-end',
  },
  otherMessageContainer: {
    justifyContent: 'flex-start',
  },
  senderAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  messageBubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 15,
  },
  myMessageBubble: {
    backgroundColor: '#1A73E8',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 0,
  },
  otherMessageBubble: {
    backgroundColor: '#F0F0F0',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
  },
  messageText: {
    fontSize: 14,
  },
  myMessageText: {
    color: '#fff',
  },
  otherMessageText: {
    color: '#333',
  },
  messageTime: {
    fontSize: 10,
    color: '#777',
    marginTop: 5,
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  attachmentButton: {
    marginRight: 10,
  },
  messageInput: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxHeight: 100,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#1A73E8',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});