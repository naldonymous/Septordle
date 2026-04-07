"use client";
import {useState, useEffect} from "react";
import {VALID_GUESSES} from "@/data/words";
import {Footer, Keyboard, Navbar, StyleButton} from "@/components";

export default function Home() {
  return (
    <main className = "flex flex-col items-center">
        <title>Septordle - Home</title>
        <div id = "description" className = "flex">
            <p>Hello! Welcome to Septordle</p>
        </div>
    </main>
  );
}
