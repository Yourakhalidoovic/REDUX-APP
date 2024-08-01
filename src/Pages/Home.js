import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { likeVideo, dislikeVideo } from "../features/videos/videoSlice";
import VideoPlayer from "../Components/VideoPlayer";

const Home = () => {
  const videos = useSelector((state) => state.videos.videos);
  const dispatch = useDispatch();

  return (
    <div className="home">
      {videos.map((video) => (
        <VideoPlayer
          key={video.id}
          video={video}
          onLike={() => dispatch(likeVideo(video.id))}
          onDislike={() => dispatch(dislikeVideo(video.id))}
        />
        
      ))}
    </div>
  );
};

export default Home;
