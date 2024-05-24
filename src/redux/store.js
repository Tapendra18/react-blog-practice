import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./UserSlice";

export const store = configureStore({
  reducer: {
    signUp: userSlice.reducer,
    loginUser: userSlice.reducer,
  },
});
