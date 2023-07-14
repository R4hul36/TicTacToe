import React, { useState } from "react";
import "./index.css";
import GameTiles from "./GameTiles";
import { useGlobalContext } from "./context";
import { styled } from "styled-components";

import Confetti from "react-confetti";
import Modal from "./Modal";

const App = () => {
  const {
    result,
    draw,
    setPlayerSymbol,
    playerSymbol,
    gameStart,
    width,
    height,
  } = useGlobalContext();

  return (
    <Wrapper>
      {result && <Confetti width={width} height={height} />}
      <h1>
        <span style={{ color: "red" }}>Tic</span>-
        <span style={{ color: "#ADD8E6" }}>Tac</span>-
        <span style={{ color: "blue" }}>Toe</span>
      </h1>
      <div className='btn-container'>
        <button
          disabled={gameStart}
          className={`btn ${playerSymbol === "X" && "btn-red"}`}
          onClick={() => setPlayerSymbol("X")}
        >
          Select X
        </button>
        <button
          disabled={gameStart}
          className={`btn ${playerSymbol === "O" && "btn-blue"}`}
          onClick={() => setPlayerSymbol("O")}
        >
          Select O
        </button>
      </div>

      {result || draw || <GameTiles />}
      <Modal />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  h1 {
    text-align: center;
    margin-top: 3rem;
  }
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  .btn-container {
    display: flex;
    margin-top: 2rem;
    gap: 1rem;
  }
  .btn {
    padding: 5px;
    width: 7rem;
    font-size: large;
  }
  .btn-red {
    border-bottom: 0.4rem solid red;
  }
  .btn-blue {
    border-bottom: 0.4rem solid blue;
  }
`;

export default App;
