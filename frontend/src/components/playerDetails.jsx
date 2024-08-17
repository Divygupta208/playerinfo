import React from "react";

const PlayerDetails = ({ players }) => {
  return (
    <div>
      {players.length > 0 ? (
        <ul>
          {players.map((player) => (
            <li key={player.id}>
              <h3>{player.name}</h3>
              <p>Date of Birth: {new Date(player.dob).toLocaleDateString()}</p>
              <p>
                Photo:{" "}
                <img src={player.photoUrl} alt={player.name} width="100" />
              </p>
              <p>Birthplace: {player.birthplace}</p>
              <p>Career: {player.career}</p>
              <p>Matches: {player.matches}</p>
              <p>Score: {player.score}</p>
              <p>Fifties: {player.fifties}</p>
              <p>Centuries: {player.centuries}</p>
              <p>Wickets: {player.wickets}</p>
              <p>Average: {player.average.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No players found</p>
      )}
    </div>
  );
};

export default PlayerDetails;
