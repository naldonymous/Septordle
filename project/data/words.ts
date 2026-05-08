import commonWords from "@/data/commonWordsLen7.json";
import uncommonWords from "@/data/commonWordsLen7.json";

export const ANSWERS = [...commonWords, ...uncommonWords].map(w => w.toUpperCase().trim());
export const VALID_GUESSES = [...ANSWERS];
