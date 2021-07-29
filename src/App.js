import styled from 'styled-components';
import './App.css';
import { Quiz } from './components/Quiz';
import { Game } from './game';
import { useMemo, useState } from 'react';

function App() {
  const [level, setLevel] = useState(1);
  const { car, answers, checkAnswer } = useMemo(() => {
    return Game.start(() => setLevel(level + 1));
  }, [level])

  return (
    <StyledPage>
      <Quiz answers={answers} brand={car} onAnswer={checkAnswer} />
    </StyledPage>
  );
}

export default App;

export const StyledPage = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;