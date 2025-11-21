import { useState } from "react";
import Footer from "../components/Footer.jsx";
import SearchBar from "../components/SearchBar.jsx";
import QuoteFeed from "../components/QuoteFeed.jsx";
import DailyQuote from "../components/DailyQuote.jsx";
import { AnimatePresence } from "framer-motion";
import BackgroundWrapper from "../../Style/Background.jsx";

export default function Home() {
  const [showDailyQuote, setShowDailyQuote] = useState(true);

    return (
      <BackgroundWrapper>
        <div className="fixed top-4 right-4 z-50">
          <SearchBar />
        </div>
        <div className="flex-1 flex overflow-hidden">
            <div className="flex flex-1 items-center justify-center">
              <AnimatePresence>
                {showDailyQuote ? (
                  <DailyQuote 
                    key="daily-quote"
                    onExit={() => setShowDailyQuote(false)} 
                  />
                ) : (
                  <QuoteFeed key="quote-feed" />
                )}
            </AnimatePresence>
            </div>
        </div>

        <footer className="p-4 text-center">
          <Footer />
        </footer>
      </BackgroundWrapper>
  );
}
