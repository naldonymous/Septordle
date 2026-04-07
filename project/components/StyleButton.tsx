'use client'
import {useState, useEffect} from "react";

export default function StyleButton() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const top = window.document.documentElement;
        if (isDark) {
            top.classList.add("dark");
        } else {
            top.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <div className="gap-20 flex">
            <button onClick = {() => setIsDark(true)}
                className="
                    bg-white-200
                    dark:black
                    cursor-pointer active:50
                ">
                {"🌙"}
            </button>
            <button onClick = {() => setIsDark(false)}
                className="
                    bg-white-200
                    dark:black
                    cursor-pointer active:50
                ">
                {"☀️"}
            </button>
        </div>
    )
}