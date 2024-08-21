import { useState } from "react";
import Addplayer from "./components/addplayer";
import Searchplayer from "./components/searchplayer";

function App() {
  const [playerToEdit, setPlayerToEdit] = useState(null);
  const [showDetails, setShowDetails] = useState(true);

  const handleEditPlayer = (player) => {
    setPlayerToEdit(player);
  };

  const handleFormSubmit = () => {
    setPlayerToEdit(null);
  };

  return (
    <div>
      <Addplayer player={playerToEdit} onSubmit={handleFormSubmit} />
      <Searchplayer
        onEditPlayer={handleEditPlayer}
        showDetails={showDetails}
        setShowDetails={setShowDetails}
      />
    </div>
  );
}

export default App;
