import { useState } from "react";
import DailyQuote from "../components/DailyQuote.jsx"; 
import Footer from "../components/Footer.jsx";
import SearchBar from "../components/SearchBar.jsx";

export default function Home() {
    return (
    <> 
      <div className="flex flex-col h-dvh bg-gradient-to-br from-slate-800 to-slate-950 text-white">
        <div className="flex p-4 justify-end">
          <SearchBar />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <DailyQuote />
        </div>
        
        <footer className="p-4 text-center">
          <Footer />
        </footer>

      </div>
    </>
    );
}
