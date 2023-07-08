import React from "react";
import { useGlobalContext } from "./context";
import { styled } from "styled-components";

const SingleTile = ({ tile }) => {
  return (
    <Wrapper>
      <p>{tile}</p>
    </Wrapper>
  );
};

export default SingleTile;

const Wrapper = styled.div`
  background-color: #f57842;
  opacity: 0.9;
  border-radius: 10%;
  //border: 3px solid black;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 6rem;
    color: black;
  }
`;
