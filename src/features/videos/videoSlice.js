import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [
    { id: 1, url: "video1.mp4", likes: 0, dislikes: 0 },
    { id: 2, url: "video2.mp4", likes: 0, dislikes: 0 },
    // Add more videos here
  ],
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    likeVideo: (state, action) => {
      const video = state.videos.find((video) => video.id === action.payload);
      if (video) video.likes += 1;
    },
    dislikeVideo: (state, action) => {
      const video = state.videos.find((video) => video.id === action.payload);
      if (video) video.dislikes += 1;
    },
  },
});

export const { likeVideo, dislikeVideo } = videoSlice.actions;
export default videoSlice.reducer;
