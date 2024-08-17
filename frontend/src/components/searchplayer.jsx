import React, { useRef } from "react";
import PlayerDetails from "./playerDetails";

const Searchplayer = () => {
  const playerRef = useRef();

  const searchPlayer = () => {
    console.log(playerRef.current.value);
  };

  return (
    <>
      <div>
        <label id="player">Search Player</label>
        <input type="text" name="playername" id="player" ref={playerRef} />
        <button onClick={searchPlayer}>search</button>
      </div>
      <div>
        <PlayerDetails />
      </div>
    </>
  );
};

export default Searchplayer;
