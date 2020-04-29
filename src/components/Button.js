import React from "react";
import styled from "styled-components";

export const Button = ({ onClick, buttonTitle, answer }) => {
  return (
    <QuizButton onClick={onClick} disabled={!answer ? true : false}>
      {buttonTitle}{" "}
    </QuizButton>
  );
};

const QuizButton = styled.button`
  display: inline-block;
  height: 50px;
  width: 150px;
  border: 0;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.24em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #fff;
  background-color: #0b0014;
  text-align: center;
  transition: all 0.2s;
`;
