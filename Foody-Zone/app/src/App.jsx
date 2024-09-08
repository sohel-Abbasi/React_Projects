import React from 'react'
import styled from "styled-components"
const App = () => {
  return (
    <MainContainer>
       <TopContainer>
        <div className='logo'>
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className='search'>
          <input type="text" placeholder='Search Food..' />
        </div>
       </TopContainer>
       <FilterContainer>
          <Button>All</Button>
          <Button>Breakfast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
       </FilterContainer>
    </MainContainer>
  )
}

export default App;

// export const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
// `;
const MainContainer = styled.div`
  background-color: rgba(51, 34, 34, 0.2)4;
`;
const TopContainer = styled.section`
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      &::placeholder {
        color: white;
      }
    }
  }

  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background: ${({ isSelected }) => (isSelected ? "#f22f2f" : "#ff4343")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#ff4343")};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #f22f2f;
  }
`;
