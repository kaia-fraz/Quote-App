import Footer from "../components/Footer.jsx";
import QuoteFeed from "../components/QuoteFeed.jsx";
import { AnimatePresence } from "framer-motion";
import BackgroundWrapper from "../../Style/Background.jsx";

export default function Home() {

    return (
      <BackgroundWrapper>
        <div className="flex-1 flex overflow-hidden">
            <div className="flex flex-1 items-center justify-center">
              <AnimatePresence>
                <QuoteFeed key="quote-feed" />
            </AnimatePresence>
            </div>
        </div>
        <footer className="p-4 text-center">
          <Footer />
        </footer>
      </BackgroundWrapper>
  );
}
