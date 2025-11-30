import useQuote from "../hooks/useQuote";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function QuoteFeed({ onExit, fetchQuote }) {
    const { quote, loading, error } = useQuote();
    return (
        <>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onClick={() => {
                onExit;
                fetchQuote;
            }}
            className="flex flex-col justify-center items-center p-6 mx-5 shadow-xl rounded-xl cursor-pointer backdrop-blur-md
            bg-blue-500/10 shadow-xl rounded-xl cursor-pointer
                border border-l-blue-500/20 border-t-blue-500/20
                border-r-black border-b-black
                backdrop-blur-md
                hover:bg-blue-500/20 transition"
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
                <Heart className="w-5 h-5 mt-2 cursor-pointer hover:text-red-500" onClick={fetchQuote} />
            <p className="text-center mt-4 text-sm text-gray-400">
                Tap the button below to fetch a new quote
            </p>
            </motion.div>
            </>
    );
}