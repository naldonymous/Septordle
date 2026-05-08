import Link from "next/link";
import StyleButton from "./StyleButton";

export default function Navbar() {
    return (
        <nav className="bg-gray-400 border-b py-4 text-[color:var(--foreground)] flex flex-col sm:flex-row items-center justify-between w-full px-4 sm:px-8 gap-4">
            <h1 className="text-2xl">SEPTORDLE</h1>
            <div className="flex gap-4 sm:gap-8">
                <Link href="/" className="hover:text-red-200 hover:text-xl transition-all duration-200">Home</Link>
                <Link href="/game" className="hover:text-red-200 hover:text-xl transition-all duration-200">Play</Link>
                <Link href="/stats" className="hover:text-red-200 hover:text-xl transition-all duration-200">Stats</Link>
                <StyleButton/>
            </div>
        </nav>
    )
}