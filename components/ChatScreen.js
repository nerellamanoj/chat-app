// /components/ChatScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages, sendMessage } from '../redux/chatSlice'; 

export default function ChatScreen() {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const [text, setText] = useState('');

  // Fetch messages when the component mounts
  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const handleSendMessage = () => {
    if (text.trim()) {
      dispatch(sendMessage({ text, userId: 'currentUserId' })); // Replace 'currentUserId' with actual user ID
      setText(''); // Clear the input after sending
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={item.userId === 'currentUserId' ? styles.myMessage : styles.otherMessage}>
            <Text>{item.text}</Text>
            <Text style={styles.timestamp}>
              {new Date(item.timestamp.seconds * 1000).toLocaleTimeString()}
            </Text>
          </View>
        )}
      />

      <TextInput
        style={styles.input}
        placeholder="Type a message..."
        value={text}
        onChangeText={setText}
      />
      <Button title="Send" onPress={handleSendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '75%',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#eee',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '75%',
  },
  timestamp: {
    fontSize: 10,
    color: '#888',
    textAlign: 'right',
  },
});
