import React from 'react';
import _ from 'lodash';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import GuessRow from '../GuessRow'

function GuessResults({ guesses, answer }) {
  console.log({ answer })

  return  <div className="guess-results">
  {
     _.range(NUM_OF_GUESSES_ALLOWED).map(rowIndex => (
        <GuessRow key={rowIndex} guess={guesses[rowIndex]} answer={answer}/>
  ))}
</div>
}

export default GuessResults;
