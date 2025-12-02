import useQuote from "../hooks/UseQuote.js";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { LoadFavorites, AddFavorites, RemoveFavorites } from "../hooks/favorites.js";

export default function QuoteFeed({ onAddFavorite }) {
    const { quote, loading, error, fetchQuote } = useQuote();
    const [liked, setLiked] = useState(false);
    const quoteID = quote ? quote.id || Date.now() : null;

    useEffect(() => {
        if (!quote || !quote.id) return;
        const favs = LoadFavorites();
        const exists = favs.some(q => q.id === quote.id);
        setLiked(exists);
    }, [quote]);

    function handleLike(e) {
        console.log(quote)
        if (!quote) return;
        e.stopPropagation();
            
        if (liked) {
            console.log("removed")
            RemoveFavorites(quote.id);
        } else {
            AddFavorites({
                id: quoteID,
                content: quote.content,
                author: quote.author,
            });
            
        }
        setLiked(!liked);
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                onClick={fetchQuote}
                className="flex flex-col justify-center items-center p-6 mx-5 rounded-xl cursor-pointer backdrop-blur-md bg-blue-500/10 border border-l-blue-500/20 border-t-blue-500/20 border-r-black border-b-black hover:bg-blue-500/20 transition shadow-xl"
            >
                <div>
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                </div>
                {quote && !loading && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">{quote.content}</h2>
                        <p className="text-gray-400">- {quote.author}</p>
                    </div>
                )}
                    <Heart
        onClick={handleLike}
        className={`w-6 h-6 cursor-pointer transition hover:text-red-400
          ${liked ? "text-red-500 fill-red-500" : "text-gray-400"}`}
                />
                <p className="text-center mt-4 text-sm text-gray-400">
                    Tap the card to fetch a new quote
                </p>
            </motion.div>
        </>
    );
}