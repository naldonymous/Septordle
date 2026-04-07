import { useState, useEffect } from "react";
import { handleKeyPress } from "../utils/gameLogic";

export const useGameLogic = (solution: string) => {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currGuess, setCurrGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const keyListener = (e: KeyboardEvent) => {
      handleKeyPress(e, currGuess, setCurrGuess, setGuesses, setGameOver, solution, guesses);
    };

    window.addEventListener("keydown", keyListener);
    return () => window.removeEventListener("keydown", keyListener);
  }, [currGuess, guesses, solution]);

  return { guesses, currGuess, gameOver, setCurrGuess };
};