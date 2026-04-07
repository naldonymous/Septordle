"use client";
import { useGameLogic } from "../hooks/useGameLogic";
import { GameBoard } from "@/components/GameBoard";
import { Footer, Keyboard, Navbar } from "@/components";
import { handleKeyPress } from "../utils/gameLogic";

export default function Game() {
  const solution = "APPLE"; // TODO: Replace with dynamic solution
  const { guesses, currGuess, setCurrGuess, gameOver } = useGameLogic(solution);
  
  const setGuesses = () => {};
  const setGameOver = () => {};

  return (
    <main className="flex flex-col items-center gap-10">
      <title>Septordle - Game</title>
      <GameBoard guesses={guesses} currGuess={currGuess} solution={solution} />
      <Keyboard onKey={(key: string) => handleKeyPress({ key } as unknown as KeyboardEvent, currGuess, setCurrGuess, setGuesses, setGameOver, solution, guesses)} />
    </main>
  );
}