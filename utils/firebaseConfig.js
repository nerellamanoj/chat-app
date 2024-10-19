import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWlkL9k75yszTKogTWuAgTAeKgQbcOlfw",
  authDomain: "chatapp-220a9.firebaseapp.com",
  projectId: "chatapp-220a9",
  storageBucket: "chatapp-220a9.appspot.com",
  messagingSenderId: "622999188718",
  appId: "1:622999188718:web:b2c33ae872bdfe5f9f2fff",
  measurementId: "G-7TMJW8PCDE" // Optional, can be omitted for React Native
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage for state persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
export const firestore = getFirestore(app);
