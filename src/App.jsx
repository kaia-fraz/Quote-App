import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar.jsx";
import Home from "./pages/Home.jsx";
import Settings from "./pages/Settings.jsx";
import Favorites from "./pages/Favorites.jsx";
import OwnQuotes from "./pages/OwnQuotes.jsx";
import { useEffect, useState } from "react";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import { getCurrentUser } from "./accounts/auth.js";


export default function App() {
const [theme, setTheme] = useState("theme-default");

  useEffect(() => {
    // 1️⃣ Check if a user is logged in
    const user = getCurrentUser();

    // 2️⃣ Use user's saved theme if available, otherwise fallback to localStorage
    const initialTheme = user?.data?.theme || localStorage.getItem("app-theme") || "theme-default";

    // 3️⃣ Set state & DOM
    setTheme(initialTheme);
    document.documentElement.className = initialTheme;
  }, []);

  return (
    <div className="min-h-screen">
      <SideBar />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/own-quotes" element={<OwnQuotes />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>

      </main>
    </div>
  );
}
