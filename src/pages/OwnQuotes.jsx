import AddQuote from "../components/AddQuote.jsx";
import OwnQuoteCard from "../components/OwnQuoteCard.jsx";
import BackgroundWrapper from "../../Style/Background.jsx";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OwnQuotes() {

    const [quotes, setQuotes] = useState([]);

    function handleAddQuote(newQuote){
        setQuotes((prev) => [...prev, newQuote]);
    }
    function handleRemove(id) {
        setQuotes((prev) => prev.filter(q => q.id !== id));
    }
        
    return (
    <> 
        <BackgroundWrapper>
            <div className="relative">
                <div className="fixed top-4 right-4 z-50">
                    <AddQuote onAdd={handleAddQuote} />
                </div>

                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex flex-col justify-center items-center p-4"
            >
                <h1 className="text-3xl font-bold mb-4">Your Quotes</h1>
                <p className="text-gray-400">Manage your quotes here.</p>

                    <div className="mt-4 space-y-4">
                        {quotes.map(quote => (
                            <OwnQuoteCard
                                key={quote.id}
                                quote={quote}
                                onRemove={() => handleRemove(quote.id)}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </BackgroundWrapper>
    </>
    );
}
