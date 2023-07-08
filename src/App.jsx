import React, { useState } from "react";
import "./index.css";
import GameTiles from "./GameTiles";
import { useGlobalContext } from "./context";
import { styled } from "styled-components";
import Confetti from "react-confetti";
import Modal from "./Modal";

const App = () => {
  const [isExploding, setIsExploding] = useState(true);
  const { result, draw, resetGame, player } = useGlobalContext();

  return (
    <Wrapper>
      {result && <Confetti />}
      <h1>Tic-Tac-Toe</h1>
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
`;

export default App;
