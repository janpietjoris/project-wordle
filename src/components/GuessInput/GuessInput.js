import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function GuessInput({guesses, answer, handleSubmitGuess}) {

  const [tentativeGuess, setTentativeGuess] = React.useState('');

  return <form className="guess-input-wrapper" onSubmit={event => { 
    event.preventDefault();
    console.log({ guess: tentativeGuess });
    handleSubmitGuess(tentativeGuess)
    setTentativeGuess('');
  }}>
    <label htmlFor="guess-input">Enter guess:</label>
   
    <input required minLength={5} maxLength={5}
      id="guess-input" type="text" value={tentativeGuess}
      disabled={guesses.length === NUM_OF_GUESSES_ALLOWED || guesses.includes(answer)}
      onChange={event => {
        var upper = event.target.value.toUpperCase();
          setTentativeGuess(upper);
        }}/>
</form>;
}

export default GuessInput;
