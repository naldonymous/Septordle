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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4">
                    <div className="hover:opacity-70 border rounded-lg p-6 bg-gray-50 dark:bg-blue-500 flex-1 flex-col items-center">
                        <p className="text-sm text-white">Total Games Played:</p>
                        <p className="text-lg text-white font-bold">{stats.totalGames}</p>
                    </div>
                    <div className="hover:opacity-70 border rounded-lg p-6 bg-gray-50 dark:bg-blue-500 flex-1 flex-col items-center">
                        <p className="text-sm text-white">Total Wins</p>
                        <p className="text-lg text-white font-bold">{stats.totalWins}</p>
                    </div>
                    <div className="hover:opacity-70 border rounded-lg p-6 bg-gray-50 dark:bg-blue-500 flex-1 flex-col items-center">
                        <p className="text-sm text-white">Best Attempt</p>
                        <p className="text-lg text-white font-bold">{stats.bestAttempt}</p>
                    </div>
                    <div className="hover:opacity-70 border rounded-lg p-6 bg-gray-50 dark:bg-blue-500 flex-1 flex-col items-center">
                        <p className="text-sm text-white">Win Percentage</p>
                        <p className="text-lg text-white font-bold">{stats.totalGames > 0 ? ((stats.totalWins / stats.totalGames) * 100).toFixed(2) + '%' : 'N/A'}</p>
                    </div>
                    <div className="hover:opacity-70 border rounded-lg p-6 bg-gray-50 dark:bg-blue-500 flex-1 flex-col items-center">
                        <p className="text-sm text-white">Average Attempts to Win</p>
                        <p className="text-lg text-white font-bold">{stats.totalWins > 0 ? (stats.bestAttempt / stats.totalWins).toFixed(2) : 'N/A'}</p>
                    </div>
                    <div className="hover:opacity-70 border rounded-lg p-6 bg-gray-50 dark:bg-blue-500 flex-1 flex-col items-center">
                        <p className="text-sm text-white">Loss Percentage</p>
                        <p className="text-lg text-white font-bold">{stats.totalGames > 0 ? (((stats.totalGames - stats.totalWins) / stats.totalGames) * 100).toFixed(2) + '%' : 'N/A'}</p>
                    </div>
                </div>
            ) : (
                <div className="hover:opacity-70 border rounded-lg p-6 bg-gray-50 dark:bg-blue-500 flex-1 flex-col items-center">
                    <p className="text-xl text-white">No stats available. Play some games to see your stats here!</p>
                </div>
            )}
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => {
                localStorage.removeItem('stats');
                setStats(null);
            }}>Reset Stats</button>
        </div>
    );
}