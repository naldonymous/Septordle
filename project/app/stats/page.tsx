"use client";
import {Footer, Keyboard, Navbar, StyleButton} from "@/components";
import { useEffect, useState } from "react";

type Stats = {
    totalGames: number;
    totalWins: number;
    bestAttempt: number | null;
}

export default function Stats() {
    const [stats, setStats] = useState<Stats | null>(null);

    useEffect(() => {
        const storedStats = localStorage.getItem('stats');
        if (storedStats) {
            setStats(JSON.parse(storedStats));
        }
    }, []);

    return (
        <div className = "flex flex-col items-center">
            <title>Septordle - Stats</title>
            {stats ? (
                <ul>
                    <li>Total Games Played: {stats.totalGames}</li>
                    <li>Total Wins: {stats.totalWins}</li>
                    <li>Best Attempt: {stats.bestAttempt}</li>
                </ul>
            ) : (
                <p>No stats available. Play some games to see your stats here!</p>
            )}
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => {
                localStorage.removeItem('stats');
                setStats(null);
            }}>Reset Stats</button>
        </div>
    );
}