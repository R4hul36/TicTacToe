import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import SingleTile from "./SingleTile";
import { styled } from "styled-components";
const data = ["", "", "", "", "", "", "", "", ""];

const GameTiles = () => {
  const {
    setGameSquares,
    gameSquares,
    handleClick,
    result,

    draw,
    setGameEnd,
    currentSymbol,
  } = useGlobalContext();

  // if (result) {
  //   return window.alert(`Congratulations ${player} Won!!!`);
  // }

  // if (draw) {
  //   return alert("The game is a tie!!!");
  // }

  return (
    <Wrapper>
      {gameSquares.map((tile, index) => {
        return (
          <div className='tiles' onClick={() => handleClick(index)} key={index}>
            <SingleTile tile={tile} />
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media (min-width: 1000px) {
    width: 28vw;
    gap: 0.7rem;
  }
  width: 85vw;
  display: grid;
  margin: 3rem auto auto auto;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;

export default GameTiles;
