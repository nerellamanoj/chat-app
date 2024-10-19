import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageItem = ({ message, currentUserId }) => (
  <View style={message.userId === currentUserId ? styles.myMessage : styles.otherMessage}>
    <Text>{message.text}</Text>
    <Text style={styles.timestamp}>
      {new Date(message.timestamp.seconds * 1000).toLocaleTimeString()}
    </Text>
  </View>
);

const styles = StyleSheet.create({
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

export default MessageItem;
