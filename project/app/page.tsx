"use client";
import Link from "next/link";
import {useState, useEffect} from "react";
import {VALID_GUESSES} from "@/data/words";
import {Footer, Keyboard, Navbar, StyleButton} from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-8 px-4">
        <title>Septordle - Home</title>
        <div id = "description" className = "text-center">
            <p className="text-2xl">Hello! Welcome to</p>
            <p className="text-6xl font-bold">Septordle</p>
        </div>

        <br></br>
        <p className="text-3xl">HOW TO PLAY:</p>
        <div className="flex gap-2 items-center justify-center">
        <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center text-white font-bold sm:text-xl bg-green-600">S</div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center text-white font-bold sm:text-xl bg-zinc-400">E</div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center text-white font-bold sm:text-xl bg-yellow-600">P</div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center text-white font-bold sm:text-xl bg-green-600">T</div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center text-white font-bold sm:text-xl bg-zinc-400">O</div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center text-white font-bold sm:text-xl bg-zinc-400">R</div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center text-white font-bold sm:text-xl bg-yellow-600">D</div>
        </div>

        <p className="font-bold text-xl">
            Green: Letter is in the word and in the correct position.
            <br></br>
            Yellow: Letter is in the word and not in the correct position.
            <br></br> 
            Grey: Letter is not in the word.
        </p>

        <Link href="/game" className="text-xl mt-4 px-8 py-3 bg-blue-500 text-white rounded hover:opacity-70
        transition-all duration-200">Enter Game</Link>
    </main>
  );
}
