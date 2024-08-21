import React, { useState } from "react";

const PlayerDetails = ({ players, onEdit, setShowDetails }) => {
  const handleEditClick = (player) => {
    onEdit(player);
    setShowDetails(false);
  };
  return (
    <>
      <div>
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
          {players.length > 0 ? (
            <ul className="space-y-6">
              {players.map((player) => (
                <li
                  key={player.id}
                  className="border-b border-gray-200 pb-4 last:border-none"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {player.name}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Date of Birth: {new Date(player.dob).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600 mb-2">
                    Photo:{" "}
                    <img src={player.photoUrl} alt={player.name} width="100" />
                  </p>
                  <p className="text-gray-600 mb-2">
                    Birthplace: {player.birthplace}
                  </p>
                  <p className="text-gray-600 mb-2">Career: {player.career}</p>
                  <p className="text-gray-600 mb-2">
                    Matches: {player.matches}
                  </p>
                  <p className="text-gray-600 mb-2">Score: {player.score}</p>
                  <p className="text-gray-600 mb-2">
                    Fifties: {player.fifties}
                  </p>
                  <p className="text-gray-600 mb-2">
                    Centuries: {player.centuries}
                  </p>
                  <p className="text-gray-600 mb-2">
                    Wickets: {player.wickets}
                  </p>
                  <p className="text-gray-600 mb-2">
                    Average: {player.average.toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleEditClick(player)}
                    className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    Edit Player
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </>
  );
};

export default PlayerDetails;
