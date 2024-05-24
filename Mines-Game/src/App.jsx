import { useState } from "react";
import "./App.css";
import Square from "./Square/Square";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumbers() {
  let randomNumbers = [];
  while (randomNumbers.length < 3) {
    let randomNumber = getRandomInt(1, 25);
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
}

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [randomNumbers, setRandomNumbers] = useState(generateRandomNumbers());

  const restartGame = () => {
    setGameOver(false);
    setScore(0);
    setRandomNumbers(generateRandomNumbers());
  };

  let items = [];
  for (let index = 1; index < 26; index++) {
    if (randomNumbers.includes(index)) {
      items.push(
        <Square
          setScore={setScore}
          gameOver={gameOver}
          setGameOver={setGameOver}
          mine={true}
          key={index}
        />
      );
    } else {
      items.push(
        <Square
          setScore={setScore}
          gameOver={gameOver}
          setGameOver={setGameOver}
          key={index}
        />
      );
    }
  }

  return (
    <>
      <div className="d-flex gap-10">
        <div className="totalScore">
          <p className="heading">Mines Game</p>
          <p>Total Score</p>
          <p>{score} PTS</p>
          {gameOver && (
            <button onClick={restartGame} className="resetBtn">
              Restart Game
            </button>
          )}
        </div>
        <div className="d-grid">{items}</div>
      </div>
    </>
  );
}

export default App;
