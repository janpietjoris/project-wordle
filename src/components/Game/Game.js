import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import EndGame from '../EndGame';
// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) { 
    console.log({ tentativeGuess })
    setGuesses([...guesses, tentativeGuess]);
  }

  return <>
    <GuessResults guesses={guesses} answer={answer} />
    <GuessInput  guesses={guesses} answer={answer} handleSubmitGuess={handleSubmitGuess}  />
    <EndGame guesses={guesses} answer={answer}/>
     
  </>;
}

export default Game;
