import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Features/useSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
