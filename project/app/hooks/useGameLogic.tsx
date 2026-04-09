import { useState, useEffect } from "react";
import { handleKeyPress } from "../utils/gameLogic";

export const useGameLogic = (solution: string) => {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currGuess, setCurrGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const date = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const keyListener = (e: KeyboardEvent) => {
      if (gameOver) {
        return;
      }
      handleKeyPress(e, currGuess, setCurrGuess, setGuesses, setGameOver, solution, guesses);
    };

    window.addEventListener("keydown", keyListener);
    return () => window.removeEventListener("keydown", keyListener);
  }, [currGuess, guesses, solution]);

  useEffect(() => {
    const storedDate = localStorage.getItem('prevDate');
    if (storedDate === date) {
        // User has already played today, load their game state
        const storedGuesses = localStorage.getItem('guesses');
        const storedGameOver = localStorage.getItem('gameOver');
        if (storedGuesses) {
            setGuesses(JSON.parse(storedGuesses));
        }
        if (storedGameOver) {
            setGameOver(JSON.parse(storedGameOver));
        }

    } else {
        localStorage.setItem('prevDate', date);
        localStorage.removeItem('guesses');
        localStorage.removeItem('gameOver');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('prevDate', date);
    if (guesses.length > 0) {
        localStorage.setItem('guesses', JSON.stringify(guesses));
        localStorage.setItem('gameOver', JSON.stringify(gameOver));
    }
  }, [guesses, gameOver]);

  return { guesses, currGuess, gameOver, setCurrGuess };
};