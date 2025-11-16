import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar.jsx";
import Home from "./pages/Home.jsx";
import Settings from "./pages/Settings.jsx";
import Favorites from "./pages/Favorites.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <SideBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>

      </main>
    </div>
  );
}
