import BackgroundWrapper from "../../Style/Background";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { useEffect, useState } from "react";

export default function Settings() {
    const [theme, setTheme] = useState("theme-default");

    useEffect(() => {
        const saved = localStorage.getItem("app-theme");
        if (saved) {
            setTheme(saved);
            document.documentElement.className = saved;
        } else {
            document.documentElement.className = "theme-default";
        }
    }, []);

    const changeTheme = (name) => {
        setTheme(name);
        document.documentElement.className = name;
        localStorage.setItem("app-theme", name);
    };

    return (
    <> 
        <BackgroundWrapper>
            <ThemeSwitcher changeTheme={changeTheme} />
            <h1 className="text-3xl font-bold mb-4">Settings</h1>
            <p>Manage your settings here.</p>
        </BackgroundWrapper>
    </>
    );
}
