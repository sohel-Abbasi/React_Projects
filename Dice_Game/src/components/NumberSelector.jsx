import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({ setError,error,selectedNumber, setSelectedNumber }) => {
  const array = [1, 2, 3, 4, 5, 6];

   const numberSelectorHandler = (items) =>{
    setSelectedNumber(items);
    setError("");
   }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {array.map((items, i) => (
          <Box 
            key={i}
            onClick={() => numberSelectorHandler(items) }
            isSelected={items === selectedNumber}
          >
            {items}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 18px;
  }
  p {
    font-size: 18px;
    font-weight: 500;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 55px;
  width: 55px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 18px;
  font: 600;
  cursor: pointer;
  &:hover {
    background-color: black;
    border: 2px solid black;
    color: white;
    transition: 0.3s ease-in-out;
  }

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
