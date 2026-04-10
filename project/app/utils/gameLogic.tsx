import { ANSWERS, VALID_GUESSES } from "@/data/words";

const dateNow = new Date();
const dateFixed = new Date(2026, 0, 1);
const day = Math.floor((dateNow.getTime() - dateFixed.getTime()) / (1000 * 60 * 60 * 24));

export const getSolution = () => {
    const randomIndex = Math.floor(day % ANSWERS.length);
    return ANSWERS[randomIndex];
}

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
  
    return "bg-zinc-400";
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
  
      if (currGuess === solution) {
        setGameOver(true);
        updateStats(true, guesses.length + 1);
        alert("Congratulations! You guessed the word!");
      } else if (guesses.length + 1 === 6) {
        setGameOver(true);
        updateStats(false, 6);
        alert(`Game Over! The word was ${solution}`);
      }
      return;
    }
  
    if (currGuess.length < 5 && /^[a-z]$/i.test(e.key)) {
      setCurrGuess(currGuess + e.key.toUpperCase());
    }
  };

  const updateStats = (won: boolean, attempts: number) => {
    const savedStats = localStorage.getItem('stats');
    const currentStats = savedStats ? JSON.parse(savedStats) : { totalGames: 0, totalWins: 0, bestAttempt: null };
    
    const update = {
        totalGames: currentStats.totalGames + 1,
        totalWins: currentStats.totalWins + (won ? 1 : 0),
        bestAttempt: won ? (currentStats.bestAttempt ? Math.min(currentStats.bestAttempt, attempts) : attempts) : currentStats.bestAttempt
    };

    localStorage.setItem("stats", JSON.stringify(update));
}