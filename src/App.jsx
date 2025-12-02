import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar.jsx";
import Home from "./pages/Home.jsx";
import Settings from "./pages/Settings.jsx";
import Favorites from "./pages/Favorites.jsx";
import OwnQuotes from "./pages/OwnQuotes.jsx";
import { useEffect } from "react";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";



export default function App() {
  // Apply saved theme (user theme or app-theme) on initial load
  useEffect(() => {
    const saved = localStorage.getItem("app-theme") || "theme-default";
    document.documentElement.className = saved;
    const onStorage = () => {
      const updated = localStorage.getItem("app-theme") || "theme-default";
      document.documentElement.className = updated;
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
      <div className="min-h-screen"
      >
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
