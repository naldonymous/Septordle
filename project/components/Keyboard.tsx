const KEYBOARD = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"]
];

export const Keyboard = ({onKey, keyColors}: {
    onKey: (key: string) => void,
    keyColors: Record<string, string>}) => {
    return (
        <div className = "flex flex-col items-center gap-2 w-full max-w-lg text-white">
            {KEYBOARD.map((row, i) => (
                <div key={i} className="flex gap-1 w-full max-w-lg px-2">
                    {row.map ((key) => (
                        <button 
                        key={key}
                        onClick={() => onKey(key)}
                        className={`h-12 flex-1 ${keyColors[key] || "bg-gray-500"} uppercase rounded text-sm`}
                    >
                        {key === "BACKSPACE" ? "⌫": key === "ENTER" ? "↵": key}
                    </button>
                    ))}
                </div>
            ))}
        </div>
    );
};