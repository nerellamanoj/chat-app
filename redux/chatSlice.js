import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages, sendMessage } from '../redux/chatSlice';

const ChatScreen = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const loading = useSelector((state) => state.chat.loading);
  const error = useSelector((state) => state.chat.error);
  const [text, setText] = useState('');

  useEffect(() => {
    dispatch(fetchMessages()); // Fetch messages on mount
  }, [dispatch]);

  const handleSend = () => {
    if (text.trim()) {
      dispatch(sendMessage({ text, userId: 'currentUserId' })); // Replace with actual userId
      setText(''); // Clear input
    }
  };

  return (
    <View>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text>{item.text}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      {error && <Text>{error}</Text>}
      <TextInput value={text} onChangeText={setText} />
      <Button title="Send" onPress={handleSend} />
      {loading && <Text>Loading...</Text>} {/* Loading feedback */}
    </View>
  );
};

export default ChatScreen;
