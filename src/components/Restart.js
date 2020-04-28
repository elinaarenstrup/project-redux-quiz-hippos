import React from "react";
import { useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import styled from "styled-components";

export const RestartButton = () => {
  const dispatch = useDispatch();

  return (
    <RestartButton
      type="button"
      onClick={() => dispatch(quiz.actions.restart())}
    >
      Start again
    </RestartButton>
  );
};

const RestartButton = styled.button`
  background-color: transparent;
  border: none;
  background-repeat: no-repeat;
  overflow: hidden;
  transition: transform 1s;
  &:hover {
    transform: rotate(360deg);
  }
`;
