import { useState } from "react";

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
        <>
            <div
                className={`
                   m-3 p-4 rounded-xl 
                    backdrop-blur-md shadow-xl 
                    transition-all duration-300
                    bg-blue-500/10 
                    border border-l-blue-500/20
                     border-t-blue-500/20 
                     border-r-black 
                     border-b-black hover:bg-blue-500/20
                    
                `}
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
        </>
    );
}
