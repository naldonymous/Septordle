"use client";
import Link from "next/link";
import {useState, useEffect} from "react";
import {VALID_GUESSES} from "@/data/words";
import {Footer, Keyboard, Navbar, StyleButton} from "@/components";

export default function Home() {
  return (
    <main className = "flex flex-col items-center gap-8">
        <title>Septordle - Home</title>
        <div id = "description" className = "text-center">
            <p className="text-2xl">Hello! Welcome to</p>
            <p className="text-6xl font-bold">Septordle</p>
        </div>
        <Link href="/game" className="text-3xl mt-4 px-8 py-8 bg-blue-500 text-white rounded hover:opacity-70
        transition-all duration-200">Enter Game</Link>
    </main>
  );
}
