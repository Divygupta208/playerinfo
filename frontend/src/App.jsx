import { useState } from "react";
import Addplayer from "./components/addplayer";
import Searchplayer from "./components/searchplayer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Addplayer />
      <Searchplayer />
    </>
  );
}

export default App;
