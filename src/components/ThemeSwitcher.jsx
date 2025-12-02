import { useState } from "react";
import { Palette } from "lucide-react";

export default function ThemeSwitcher({ changeTheme }) {
    const [theme, setTheme] = useState("theme-default");
    const [open, setOpen] = useState(false);

    function handleThemeSelect(themeName) {
        setTheme(themeName);
        localStorage.setItem("app-theme", themeName);
        if (changeTheme) changeTheme(themeName);
        setOpen(false);
    }


    return (
        <div>
            <button
                onClick={() => setOpen(!open)}
                className="p-4 rounded-full backdrop-blur-md shadow-lg hover:bg-blue-500/20 transition"
                style={{ color: "var(--text)" }}
            >
                <Palette />
            </button>

            <div
                className={`
                   mt-3 p-4 rounded-xl 
                    backdrop-blur-md border shadow-xl 
                    transition-all duration-300
                    ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-3"}
                `}
                style={{
                    background: "var(--cardOpaque)",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                }}
            >   <button className="block w-full text-left p-2 hover:bg-white/20 rounded" onClick={() => handleThemeSelect("theme-default")}>
                    Default
                </button>
                <button className="block w-full text-left p-2 hover:bg-white/20 rounded" onClick={() => handleThemeSelect("theme-purple")}>
                    Purple
                </button>
                <button className="block w-full text-left p-2 hover:bg-white/20 rounded" onClick={() => handleThemeSelect("theme-green")}>
                    Green
                </button>
                <button className="block w-full text-left p-2 hover:bg-white/20 rounded" onClick={() => handleThemeSelect("theme-red")}>
                    Red
                </button>
                <button className="block w-full text-left p-2 hover:bg-white/20 rounded" onClick={() => handleThemeSelect("theme-blue")}>
                    Blue
                </button>
            </div>
        </div>
    );
}
