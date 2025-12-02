import { useState, useEffect } from "react";
import { Home as HomeIcon, Menu, Settings as SettingsIcon, Heart as HeartIcon, X, Plus, CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";



export default function SideBar() {
  const [open, setOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("currentUserId");
    setIsAuthenticated(!!userId);
  }, []);

  function signOut() {
    localStorage.removeItem("currentUserId");
    setIsAuthenticated(false);
    alert("Signed out")
    window.location.reload();
  }

  return (
    <>
      <div className="absolute top-4 left-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="p-3 rounded-full backdrop-blur-md hover:bg-blue-500/20 transition"
      >
        {open ? <X className="text-white" /> : <Menu className="text-white" />}
      </button>
      {open && (
        <div className="mt-3 p-4 w-34 rounded-xl bg-blue-500/10 backdrop-blur-md border border-white/10 shadow-xl flex flex-col gap-3">
          <nav className="flex flex-col gap-2 text-white ">
            <Link to="/" className="flex items-center gap-2 hover:text-gray-300">
              <HomeIcon className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link to="/settings" className="flex items-center gap-2 hover:text-gray-300">
              <SettingsIcon className="w-5 h-5 " />
              <span >Settings</span>
            </Link>
            <Link to="/favorites" className="flex items-center gap-2 hover:text-gray-300">
              <HeartIcon className="w-5 h-5" />
              <span>Favorites</span>
            </Link>
            <Link to="/own-quotes" className="flex items-center gap-2 hover:text-gray-300">
              <Plus className="w-5 h-5" />
              <span >Add</span>
            </Link>
            {isAuthenticated ? (
              <button
                onClick={signOut}
                className="flex items-center gap-2 hover:text-red-300 text-left"
              >
                <CircleUserRound className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            ) : (
              <Link to="/sign-up" className="flex items-center gap-2 hover:text-gray-300">
                <CircleUserRound className="w-5 h-5" />
                <span>Sign Up</span>
              </Link>
            )}
          </nav>
        </div>
      )}
    </div>
    </>
  );
}
