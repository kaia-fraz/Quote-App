import BackgroundWrapper from "../../Style/Background";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Settings() {
    const [theme, setTheme] = useState("theme-default");

    const changeTheme = (name) => {
        setTheme(name);
        document.documentElement.className = name;
        localStorage.setItem("app-theme", name);
    };

    return (
    <> 
        <BackgroundWrapper>
            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex flex-col items-center"
            >
                <h1 className="text-3xl font-bold mb-4">Themes</h1>
                <ThemeSwitcher changeTheme={changeTheme} />
                <p className="text-gray-500">Change your energy.</p>
                
            </motion.div>
        </BackgroundWrapper>
    </>
    );
}
