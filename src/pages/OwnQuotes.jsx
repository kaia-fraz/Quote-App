import AddQuote from "../components/AddQuote.jsx";
import QuoteCard from "../components/QuoteCard.jsx";
import BackgroundWrapper from "../../Style/Background.jsx";
import { useEffect } from "react";
import { useState } from "react";

export default function OwnQuotes() {
    const [quotes, setQuotes] = useState(() => {
        try {
            const raw = localStorage.getItem("own-quotes");
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("own-quotes", JSON.stringify(quotes));
    }, [quotes]);

    function handleAddQuote(newQuote){
        setQuotes(prevQuotes => [...prevQuotes, newQuote]);
    } 
    function handleRemove(id) {
    setQuotes(prev => prev.filter(q => q.id !== id));
  }
    
    return (
    <> 
        <BackgroundWrapper>
            <div className="relative">
                <div className="fixed top-4 right-4 z-50">
                    <AddQuote onAdd={handleAddQuote} />
                </div>

                <div className="flex flex-col justify-center items-center p-4">
                    <h1 className="text-3xl font-bold mb-4">Your Quotes</h1>
                    <p>Manage your quotes here.</p>

                    <div className="mt-4 space-y-4">
                        {quotes.map(quote => (
                            <QuoteCard
                                key={quote.id}
                                quote={quote}
                                onRemove={() => handleRemove(quote.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </BackgroundWrapper>
    </>
    );
}
