import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setisGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setisGameStarted((prev) => !prev);
  };
  return (
    <>
    {
      isGameStarted ? <GamePlay/> :<StartGame 
       toggle={toggleGamePlay}
      />
    }
    
    </>
  );
}

export default App;
