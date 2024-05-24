import "./Square.css";
import hoverEffect from "../assets/Sound/hover.wav";
import DiamondEffect from "../assets/Sound/gold.wav";
import diamondIcon from "../assets/diamond.png";
import bombIcon from "../assets/bomb.png";
import { useEffect, useState } from "react";

function Square({ mine, setGameOver, gameOver, setScore }) {
  let [image, setImage] = useState(null);

  useEffect(() => {
    if (gameOver) {
      if (mine) {
        setImage(bombIcon);
      } else {
        setImage(diamondIcon);
      }
    } else {
      setImage(null); // Reset image on game restart
    }
  }, [gameOver, mine]);

  function mouseEnterHandler() {
    if (!image) {
      const sound = new Audio(hoverEffect);
      sound.play();
    }
  }

  function clickHandler() {
    if (gameOver) return;

    if (!mine) {
      setScore((prevValue) => prevValue + 100);
      setImage(diamondIcon);
      const sound = new Audio(DiamondEffect);
      sound.play();
    } else {
      alert("You Lose the Game!");
      setGameOver(true);
    }
  }

  return (
    <div
      className="square-item"
      onMouseEnter={mouseEnterHandler}
      onClick={clickHandler}
    >
      {image && <img height={80} width={80} src={image} className="assImage" />}
    </div>
  );
}

export default Square;
