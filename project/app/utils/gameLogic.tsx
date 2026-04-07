import { VALID_GUESSES } from "@/data/words";

export const getLetterColor = (letter: string, index: number, solution: string) => {
    if (!letter) return;
  
    const solutionLetters = solution.split("");
    const upperLetter = letter.toUpperCase();
  
    if (upperLetter === solutionLetters[index]) {
      return "bg-green-600";
    }
  
    if (solutionLetters.includes(upperLetter)) {
      return "bg-yellow-600";
    }
  
    return "bg-zinc-700";
  };
  
  export const handleKeyPress = (
    e: KeyboardEvent,
    currGuess: string,
    setCurrGuess: (guess: string) => void,
    setGuesses: (guesses: string[]) => void,
    setGameOver: (status: boolean) => void,
    solution: string,
    guesses: string[]
  ) => {
    if (e.key === "Backspace") {
      setCurrGuess(currGuess.slice(0, -1));
      return;
    }
  
    if (e.key === "Enter") {
      if (currGuess.length !== 5) {
        alert("Too short");
        return;
      }
  
      if (!VALID_GUESSES.includes(currGuess)) {
        alert("Not a valid word!");
        return;
      }
  
      setGuesses([...guesses, currGuess]);
      setCurrGuess("");
  
      if (currGuess === solution || guesses.length + 1 === 6) {
        setGameOver(true);
        alert("Congratulations! You guessed the word!");
      }
      return;
    }
  
    if (currGuess.length < 5 && /^[a-z]$/i.test(e.key)) {
      setCurrGuess(currGuess + e.key.toUpperCase());
    }
  };