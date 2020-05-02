import React from "react";
import { useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import styled from "styled-components";

export const RestartButton = () => {
  const dispatch = useDispatch();

  return (
    <Button type="button" onClick={() => dispatch(quiz.actions.restart())}>
      Start over
    </Button>
  );
};

const Button = styled.button`
  display: inline-block;
  height: 100px;
  width: 200px;
  border: 0;
  margin: 0 0.3em 0.8em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #fff;
  background-color: #0b0014;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
`;
