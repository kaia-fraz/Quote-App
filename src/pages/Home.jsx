import { useState } from "react";
import SideBar from "../components/SideBar.jsx";
import QuoteCard from "../components/QuoteCard.jsx"; 
import Footer from "../components/Footer.jsx";

export default function Home() {
    return (
    <> 
      <div className="flex flex-col h-dvh bg-gradient-to-br from-slate-800 to-slate-950 text-white">

        <div className="flex-1 flex items-center justify-center">
          <QuoteCard />
        </div>
        
        <footer className="p-4 text-center">
          <Footer />
        </footer>

      </div>
    </>
    );
}
