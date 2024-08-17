import React, { useRef, useState } from "react";
import PlayerDetails from "./playerDetails";

const Searchplayer = () => {
  const playerRef = useRef();
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState("");

  const searchPlayer = async () => {
    const name = playerRef.current.value;

    if (!name) {
      setError("Please enter a player name.");
      setPlayers([]);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/getplayer?name=${encodeURIComponent(name)}`
      );
      if (!response.ok) {
        throw new Error("Player not found");
      }
      const data = await response.json();
      console.log(data);
      setPlayers(data);
      setError("");
    } catch (err) {
      console.log(err);
      setError(err.message);
      setPlayers([]);
    }
  };

  return (
    <>
      <div>
        <label htmlFor="player">Search Player</label>
        <input type="text" name="playername" id="player" ref={playerRef} />
        <button onClick={searchPlayer}>Search</button>
      </div>
      <div>
        {error && <p>{error}</p>}
        <PlayerDetails players={players} />
      </div>
    </>
  );
};

export default Searchplayer;
