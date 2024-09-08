import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog"
// import { Button } from "@/components/ui/button"

const GamePlay = () => {
  const [score,setScore] = useState(0)
  const [selectedNumber,setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
const [error,setError] = useState("");
const [activeDialog,setActiveDialog] = useState(false);

  const generateRandome = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    
    if (!selectedNumber){
      setError("You are not selected any number")
      return;
     }
     
    const randomeNumber = generateRandome(1, 7);
    setCurrentDice((prev) => randomeNumber);


    if (selectedNumber === randomeNumber){
      setScore(prev=> prev+randomeNumber)
    }
    else {
      setScore(prev => prev-2)
    }
    setSelectedNumber(undefined)
  };


  return (
    <MainContainer>
    
      <div className="top_section">
        <TotalScore   score={score}/>
        <NumberSelector
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice}
      roleDice={roleDice}/>
      <div className="btns">
        <Button onClick={()=>setScore(0)}>Reset Score</Button>
        {/* <Button className="btn1">Show Rules</Button> */}
        <Dialog open={activeDialog} onOpenChange={setActiveDialog}>
      <DialogTrigger asChild >
        <Button className="btn1" variant="outline" onClick={()=>setActiveDialog(true)}>Show Rules</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Games Rules</DialogTitle>
        </DialogHeader>
        <div>
          <p className="text-muted-foreground">
            1. Gues any number and click on Dice if number is correct Score is increase.
            <br></br>
            2. when you pick wrong number scrore decrease by 2 points.
             
          </p>
        </div>
        <DialogFooter>
          <div>
            <Button  onClick={()=>setActiveDialog(false)}type="button">Close</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
      </div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
     display: flex;
     flex-direction: column;
     gap: 10px;
     align-items: center;


}
.btn1{
      color: black;
      background-color: white;
      border: 2px solid black;
      transition: 0.4s ease-in;
    }
    .btn1:hover{
      background-color: #cbcbcb;
      transition: 0.3s ease-in;
      cursor: pointer;
    }
`;




const Button  = styled.button`
   background-color: black;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  width: 70px;
  margin-top: 5px;
  border: 2px solid transparent;
  transition: 0.4s ease-in;
    &:hover{
      background-color: white;
      color:black;
      border: 2px solid black;
      transition: 0.3s ease-in;
      cursor: pointer;
    }

`