import { getLetterColor } from "@/app/utils/gameLogic";

interface GameBoardProps {
  guesses: string[];
  currGuess: string;
  solution: string;
}

export const GameBoard = ({ guesses, currGuess, solution }: GameBoardProps) => {
  return (
    <div className="grid gap-2 text-center">
      {[...Array(6)].map((_, rowIndex) => {
        const pastGuess = rowIndex < guesses.length;
        const currentGuess = rowIndex === guesses.length;
        const rowWord = pastGuess ? guesses[rowIndex] : currentGuess ? currGuess : "";

        return (
          <div key={rowIndex} className="flex gap-2">
            {[...Array(5)].map((_, letterIndex) => {
              const letter = rowWord[letterIndex];
              const pickColor = pastGuess ? getLetterColor(letter, letterIndex, solution) : "border-zinc-700";

              return (
                <div
                  key={letterIndex}
                  className={`w-14 h-14 border-2 flex items-center justify-center ${pickColor}`}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};