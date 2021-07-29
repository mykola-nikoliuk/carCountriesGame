import { brands, brandsNameList, countries, countriesNameList } from './config';

const ANSWERS_COUNT = 6;


export function speak(text) {
  const speech = new SpeechSynthesisUtterance();
  speech.lang = 'ru-RU';
  speech.voice = window.speechSynthesis.getVoices().filter(voice => voice.lang === 'ru-RU')[0];
  speech.text = text;
  window.speechSynthesis.speak(speech);
}

export const Game = {
  start: (onWin) => {
    const carIndex = Math.random() * brandsNameList.length | 0;
    const car = brands[brandsNameList[carIndex]];

    const answers = [car.country];

    while (answers.length < ANSWERS_COUNT) {
      const countryIndex = Math.random() * countriesNameList.length | 0;
      const answer = countries[countriesNameList[countryIndex]];
      if (!answers.includes(answer)) {
        answers.push(answer);
      }
    }

    const shuffledAnswers = shuffle(answers);
    const checkAnswer = (index) => {
      const isCorrect = index === shuffledAnswers.indexOf(car.country);
      if (isCorrect) onWin();
      return isCorrect;
    }

    return { car, answers: shuffledAnswers, checkAnswer, };
  }
}

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}