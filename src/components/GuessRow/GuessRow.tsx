import * as React from 'react';
import GuessCell from '../GuessCell';
import _ from 'lodash'
import { checkGuess } from '../../game-helpers'

function GuessRow({ index: key, guess, answer }) {
  let checkedGuess = checkGuess(guess, answer)
  console.log(checkedGuess);
  return <p className="guess" key={key}>
    {
      _.range(5).map(columnIndex => (
        <GuessCell guess={guess} key={columnIndex} columnIndex={columnIndex}
          status={checkedGuess?.[columnIndex]?.status} />
      ))
    }
    </p>;
}

export default GuessRow;
