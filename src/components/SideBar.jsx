import { useState } from "react";
import { Home as HomeIcon, Menu, Settings as SettingsIcon, Heart as HeartIcon, X } from "lucide-react";
import { Link } from "react-router-dom";


export default function SideBar() {
    const [open, setOpen] = useState(false);

  return (
    <>
      <div className="absolute top-4 left-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="p-3 rounded-lg bg-blue-500/10 backdrop-blur-md hover:bg-white/20 transition"
      >
        {open ? <X className="text-white" /> : <Menu className="text-white" />}
      </button>
      {open && (
        <div className="mt-3 p-4 w-34 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl flex flex-col gap-3">
          <nav className="flex flex-col gap-2 text-white ">
            <Link to="/" className="flex items-center gap-2 hover:text-blue-400">
              <HomeIcon className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link to="/settings" className="flex items-center gap-2 hover:text-blue-400">
              <SettingsIcon className="w-5 h-5" />
              <span>Settings</span>
            </Link>
            <Link to="/favorites" className="flex items-center gap-2 hover:text-blue-400">
              <HeartIcon className="w-5 h-5" />
              <span>Favorites</span>
            </Link>
          </nav>
        </div>
      )}
    </div>
    </>
  );
}
