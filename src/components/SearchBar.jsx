import { useState } from "react";
import { Search, X } from "lucide-react"; 

// (lucide-react is optional—use any icons you want)

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center">
      {/* Container */}
      <div
        className={`
          flex items-center transition-all duration-300 
          ${open ? "w-64 px-3 py-1" : "w-10 h-10 justify-center cursor-pointer"}
        `}
        onClick={() => {
          if (!open) setOpen(true);
        }}
      >
        {/* Input Area */}
        {open && (
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            placeholder="Search..."
            className="bg-blue-500/10 rounded-full outline-none w-full text-sm px-2 py-1 text-white"
          />
        )}

        {/* ICONS */}
        {open ? (
          // X Icon to close
          <X
            className="cursor-pointer ml-2"
            onClick={(e) => {
              e.stopPropagation(); // stop click from re-opening
              setOpen(false);
              setQuery("");
            }}
          />
        ) : (
          // Search icon when closed
          <Search className="w-5 h-5" />
        )}
      </div>
    </div>
  );
}
