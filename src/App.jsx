import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar.jsx";
import Home from "./pages/Home.jsx";
import Settings from "./pages/Settings.jsx";
import Favorites from "./pages/Favorites.jsx";
import OwnQuotes from "./pages/OwnQuotes.jsx";
import { useEffect, useState } from "react";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";


export default function App() {
  const selectedTheme = localStorage.getItem("app-theme") || "theme-default";

  useEffect(() => {
    document.documentElement.className = selectedTheme;
  }, [selectedTheme]);

  return (
    <div className="min-h-screen">
      <SideBar />
      <main>
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
