// /styles/globalStyles.js
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginVertical: 10,
    borderRadius: 8,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007BFF', // Example button background color
    padding: 10, // Adding padding for better touch area
    borderRadius: 5, // Rounded corners
  },
  buttonText: {
    color: '#fff', // White text for the button
    textAlign: 'center',
    fontSize: 16,
  },
  errorText: {
    color: 'red', // Style for error messages
    marginVertical: 5,
    textAlign: 'center',
  },
});
