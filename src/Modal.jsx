import { useGlobalContext } from "./context";
import { styled } from "styled-components";

const Modal = () => {
  const { result, draw, resetGame, player } = useGlobalContext();

  return (
    <Wrapper>
      {draw && !result ? <p className='result-txt'>The game is tied!</p> : null}
      {result && (
        <p className='result-txt'>Congratulations!!! player "{player}" won!</p>
      )}
      {(result || draw) && (
        <button className='reset-btn' onClick={() => resetGame()}>
          Restart Game
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
  align-items: center;
  //padding: 10px;

  .reset-btn {
    padding: 18px;
    margin-top: 1.5rem;
    font-size: 1.3rem;
    background-color: #add8e6;
    border: none;
    border-radius: 18px;
  }
  .result-txt {
    text-align: center;
    font-size: 1.7rem;
    font-weight: 600;
    width: 85vw;
  }
`;

export default Modal;
