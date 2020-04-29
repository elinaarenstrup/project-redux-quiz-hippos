import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RestartButton } from "./RestartButton.js";
import Lottie from "lottie-react-web";
import animation from "./favheart.json";

export const Summary = () => {
  const totalQuestions = useSelector((state) => state.quiz.questions);

  const totalAnswers = useSelector((state) => state.quiz.answers);

  const correctAnswers = totalAnswers.filter(
    (answer) => answer.isCorrect === true
  );

  return (
    <EndgameWrapper>
      <Endgame>
        YAY! You got {correctAnswers.length} /{totalQuestions.length} points!
      </Endgame>
      <Lottie
        options={{
          animationData: animation,
        }}
      />
      <RestartButton />
    </EndgameWrapper>
  );
};

const Endgame = styled.h1`
  color: #0b0014;
  font-size: 36px;
  text-align: center;
`;

const EndgameWrapper = styled.section`
  width: 550px;
  height: 550px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin: auto;
  background: #ffffff56;
  border-radius: 0.12em;
`;
