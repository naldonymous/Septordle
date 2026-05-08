import { getLetterColor } from "@/app/utils/gameLogic";

interface GameBoardProps {
  guesses: string[];
  currGuess: string;
  solution: string;
  shake: boolean;
}

export const GameBoard = ({ guesses, currGuess, solution, shake }: GameBoardProps) => {
  return (
    <div className="grid gap-2 text-center">
      {[...Array(6)].map((_, rowIndex) => {
        const pastGuess = rowIndex < guesses.length;
        const currentGuess = rowIndex === guesses.length;
        const rowWord = pastGuess ? guesses[rowIndex] : currentGuess ? currGuess : "";

        return (
          <div key={rowIndex} className={`flex gap-2 ${currentGuess && shake ? "tile-shake" : ""}`}>
            {[...Array(7)].map((_, letterIndex) => {
              const letter = rowWord[letterIndex];
              const pickColor = pastGuess ? getLetterColor(letter, letterIndex, solution) : "border-zinc-700";

              return (
                <div
                      key={`${rowIndex}-${letterIndex}-${pastGuess}`}
                      className={`w-10 h-10 sm:w-14 sm:h-14 border-2 flex items-center justify-center 
                        ${pastGuess ? "tile-flip tile-flip-out" : "border-zinc-700"}`}
                        style={{'--delay': `${letterIndex * 0.3}s`} as React.CSSProperties}>
                        <div className={`w-full h-full flex items-center justify-center
                            ${pastGuess ? pickColor + " tile-color" : ""}`}>
                            {letter}
                        </div>
                    </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};