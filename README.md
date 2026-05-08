# Septordle
 
A daily 7-letter word guessing game built with Next.js, inspired by Wordle.
 
## What is Septordle?
 
Septordle gives you 6 tries to guess a new 7-letter word every day. The word resets at midnight, and everyone gets the same word. Come back daily to keep your streak alive.
 
## Features
 
- 🟩 Daily 7-letter word — same word for everyone, resets every day
- 🎮 Full game logic — green, yellow, and gray tile feedback
- ⌨️ On-screen and physical keyboard support
- 💾 Game state persistence — close the tab and pick up where you left off
- 📊 Stats tracking — games played, wins, best attempt, win rate, and more
- 🌙 Dark and light mode toggle
- 📱 Mobile responsive design
- ✨ Tile flip and shake animations
## Tech Stack
 
- [Next.js](https://nextjs.org/) — React framework
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Framer Motion](https://www.framer.com/motion/) — page transitions
- localStorage — game state and stats persistence
## Getting Started
 
### Prerequisites
 
- Node.js 18+
- npm
### Installation
 
```bash
git clone https://github.com/your-username/septordle.git
cd septordle
npm install
npm run dev
```
 
Then open [http://localhost:3000](http://localhost:3000) in your browser.
 
## How to Play
 
1. Guess the 7-letter word in 6 tries
2. After each guess, tiles change color to show how close you were:
   - 🟩 **Green** — correct letter, correct position
   - 🟨 **Yellow** — correct letter, wrong position
   - ⬜ **Gray** — letter not in the word
3. A new word is available every day at midnight
## Project Structure
 
```
/app
  /game        — game page
  /stats       — stats page
  /hooks       — useGameLogic hook
  /utils       — game logic, letter colors, word selection
/components    — Navbar, Footer, GameBoard, Keyboard, StyleButton
/data          — word lists
```
