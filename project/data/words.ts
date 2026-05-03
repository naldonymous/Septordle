import { WORDLE_ANSWERS } from "./word-data";

export const ANSWERS = WORDLE_ANSWERS.split('\n').map(w => w.toUpperCase().trim());

export const VALID_GUESSES = [...ANSWERS];
