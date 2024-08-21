import React, { useRef, useState } from "react";
import PlayerDetails from "./playerDetails";

const Searchplayer = ({ onEditPlayer, showDetails, setShowDetails }) => {
  const playerRef = useRef();
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState("");

  const searchPlayer = async () => {
    setShowDetails(true);
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
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label
            htmlFor="player"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Search Player
          </label>
          <div className="flex">
            <input
              type="text"
              name="playername"
              id="player"
              ref={playerRef}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={searchPlayer}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>
          </div>
        </div>

        <div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {showDetails && (
            <PlayerDetails
              players={players}
              onEdit={onEditPlayer}
              setShowDetails={setShowDetails}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Searchplayer;
