import React from "react";

const Song = ({ currentSong, isPlaying, songInfo }) => {
  return (
    <div className="song-container">
      <img
        src={currentSong.cover}
        className={` ${songInfo.currentTime > 0 ? "rotate-image" : ""} ${
          isPlaying ? "" : "paused"
        }`}
      ></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
