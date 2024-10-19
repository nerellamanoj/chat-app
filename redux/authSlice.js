// redux/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../utils/firebaseConfig'; // Ensure this path is correct
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

// Sign up user
export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user; // Return user info on successful signup
    } catch (error) {
      return rejectWithValue(error.message); // Return error message
    }
  }
);

// Log in user
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user; // Return user info on successful login
    } catch (error) {
      return rejectWithValue(error.message); // Return error message
    }
  }
);

// Log out user
export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { rejectWithValue }) => {
  try {
    await signOut(auth); // Sign out user
  } catch (error) {
    return rejectWithValue(error.message); // Return error message
  }
});

// Create auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
    loading: false, // Loading state for async operations
  },
  reducers: {}, // You can add synchronous reducers if needed
  extraReducers: (builder) => {
    builder
      // Sign up user cases
      .addCase(signUpUser.pending, (state) => {
        state.loading = true; // Set loading state
        state.error = null; // Reset error
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.user = action.payload; // Set user info
        state.loading = false; // Reset loading state
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.error = action.payload; // Capture error message
        state.loading = false; // Reset loading state
      })

      // Log in user cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true; // Set loading state
        state.error = null; // Reset error
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload; // Set user info
        state.loading = false; // Reset loading state
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload; // Capture error message
        state.loading = false; // Reset loading state
      })

      // Log out user case
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null; // Reset user state
        state.loading = false; // Reset loading state
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload; // Capture error in case logout fails
        state.loading = false; // Reset loading state
      });
  },
});

export default authSlice.reducer;
