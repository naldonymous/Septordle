"use client";
import { useGameLogic } from "../hooks/useGameLogic";
import { GameBoard } from "@/components/GameBoard";
import { Footer, Keyboard, Navbar } from "@/components";
import { getSolution, handleKeyPress } from "../utils/gameLogic";

export default function Game() {
  const solution = getSolution();
  const { guesses, currGuess, setCurrGuess, gameOver, message, shake } = useGameLogic(solution);
  
  const setGuesses = () => {};
  const setGameOver = () => {};
  const setMessage = () => {};
  const setShake = () => {};

  return (
    <main className="flex flex-col items-center gap-10 relative">
      <title>Septordle - Game</title>
      {message ? <p className="absolute top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-lg z-50 font-bold">{message}</p> : null}
      <GameBoard guesses={guesses} currGuess={currGuess} solution={solution} shake={shake}/>
      <Keyboard onKey={(key: string) => handleKeyPress({ key } as unknown as KeyboardEvent, currGuess, setCurrGuess, setGuesses, setGameOver, setMessage, setShake, solution, guesses)} />
    </main>
  );
}