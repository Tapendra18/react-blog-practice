import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axiosUtils/axiosConfig";

const initialState = {
  Data: [],
  isLoading: false,
  error: null,
};

export const signUp = createAsyncThunk(
  "userSignUp",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/practical_2/register",
        userData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      localStorage.setItem("user", JSON.stringify(response?.data?.data));
      return response.data;
    } catch (error) {
      if (error.response) {
        // Return the error response message for status codes 500 and 402
        if (error.response.status === 500 || error.response.status === 402) {
          return rejectWithValue(error.response.data.message);
        }
        // Handle other status codes as needed
      }
      // Handle network or other errors
      return rejectWithValue("An unexpected error occurred. Please try again.");
    }
  }
);

export const loginUser = createAsyncThunk(
  "userLogin",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/practical_2/login",
        loginData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      localStorage.setItem("login", JSON.stringify(response?.data?.data));
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        if (status === 500 || status === 402) {
          return rejectWithValue(data.message);
        }
        return rejectWithValue(data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const userSlice = createSlice({
  name: "Data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.Data = action.payload;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.Data = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
