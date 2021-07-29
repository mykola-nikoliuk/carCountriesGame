import React from 'react';
import styled from 'styled-components';
import { speak } from '../game';

export const Quiz = ({ answers, brand, onAnswer }) => {
  return (
    <StyledWrapper>
      <StyledMainImage src={brand.image} onClick={() => speak(brand.name)} />
      <StyledAnswers>
        {answers.map((answer, index) => (
          <StyledAnswer key={answer.name} image={answer.image} onClick={() => {
            speak(answer.name)
            onAnswer(index)
          }} />
        ))}
      </StyledAnswers>
    </StyledWrapper>
  );
}

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const StyledMainImage = styled.img`
  height: 360px;
  margin: auto;
`;

const StyledAnswers = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 64px;
  flex-wrap: wrap;
`;

const StyledAnswer = styled.div`
  width: 192px;
  height: 128px;
  margin: 16px;
  background-image: url('${({ image }) => image}');
  background-size: 100% auto;
  background-position: center;
  box-shadow: 0 0 8px grey;
  border-radius: 8px;
  cursor: pointer;
`;