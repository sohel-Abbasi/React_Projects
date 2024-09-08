import React from "react";
import styled from "styled-components";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="./images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content{
     h1{
      font-size: 96px;
      white-space: nowrap;
     }
  }
`;
const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 2px solid transparent;
  transition: 0.4s ease-in;
    &:hover{
      background-color: white;
      color:black;
      border: 2px solid black;
      transition: 0.3s ease-in;
      cursor: pointer;
    }

`;
