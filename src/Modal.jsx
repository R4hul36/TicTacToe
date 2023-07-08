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
        <button className='btn' onClick={() => resetGame()}>
          Restart Game
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25vh;
  align-items: center;
  //padding: 10px;

  .btn {
    padding: 18px;
    margin-top: 1.5rem;
    font-size: 1.3rem;
    background-color: #f57842;
    border: none;
    border-radius: 18px;
  }
  .result-txt {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

export default Modal;
