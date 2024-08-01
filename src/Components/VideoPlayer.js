import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ video, onLike, onDislike }) => {
  return (
    <div className="video-player">
      <video src={video.url} controls></video>
      <div className="video-controls">
        <button onClick={onLike}>Like ({video.likes})</button>
        <button onClick={onDislike}>Dislike ({video.dislikes})</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
