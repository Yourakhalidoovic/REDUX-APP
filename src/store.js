import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./features/videos/videoSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    videos: videoReducer,
    user: userReducer,
  },
});
