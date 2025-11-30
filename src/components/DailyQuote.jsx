import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function DailyQuote({ onExit }) {
    const fakeQuote = {
        content: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onClick={onExit}
            className="flex flex-col justify-center items-center p-6 mx-5 
                bg-blue-500/10 shadow-xl rounded-xl cursor-pointer
                border border-l-blue-500/20 border-t-blue-500/20
                border-r-black border-b-black
                backdrop-blur-md
                hover:bg-blue-500/20 transition
            "
        >
            <h2 className="text-xl font-semibold text-center">
                {fakeQuote.content}
            </h2>
            <p className="text-center mt-2 text-gray-600">{fakeQuote.author}</p>

            <Heart className="w-5 h-5 mt-2 cursor-pointer hover:text-red-500" />

            <p className="text-center mt-4 text-sm text-gray-400">
                Tap anywhere to continue
            </p>
        </motion.div>
    );
}
