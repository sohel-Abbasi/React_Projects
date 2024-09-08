import React, { useState } from "react";
import styled from "styled-components";

const  RollDice = ({
  currentDice,roleDice
}) => {

  // console.log(currentDice)
  return (
    <DiceContainer>
      <div className="dice" onClick={ roleDice}>
        <img src={`./images/dice/dice_${currentDice}.png`} alt={`dic ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }
  p {
    font-size: 18px;
  }
`;
