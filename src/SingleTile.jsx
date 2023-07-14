import React from "react";
import { styled } from "styled-components";

const SingleTile = ({ tile }) => {
  return (
    <Wrapper>
      <p className={`${tile === "X" ? "red-tile" : "blue-tile"}`}>{tile}</p>
    </Wrapper>
  );
};

export default SingleTile;

const Wrapper = styled.div`
  background-color: #add8e6;
  opacity: 0.9;
  border-radius: 10%;
  //border: 3px solid black;
  height: 15vh;

  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 5.5rem;
    color: black;
  }

  .red-tile {
    color: red;
  }
  .blue-tile {
    color: blue;
  }
`;
