import BackgroundWrapper from "../../Style/Background.jsx";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);
    const [currentUserId, setCurrentUserId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem("currentUserId");
        if (!userId) {
            navigate("/sign-in");
            return;
        }
        setCurrentUserId(userId);
        const storedFavorites = JSON.parse(localStorage.getItem(`likedQuotes_user_${userId}`) || "[]");
        setFavorites(storedFavorites);
    }, [navigate]);

    function handleRemove(id) {
        if (!currentUserId) return;
        
        const updatedFavorites = favorites.filter((q) => q.id !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem(`likedQuotes_user_${currentUserId}`, JSON.stringify(updatedFavorites));
    }
    return (
    <> 
        <BackgroundWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex flex-col justify-center items-center p-4"
            >
                <h1 className="text-3xl font-bold mb-4">Favorites</h1>
                {favorites.length === 0 && (
                    <p className="text-gray-500">You haven't liked any quotes yet.</p>
                )}
                {favorites.map(q => (
            <div
                key={q.id}
                className="flex flex-col justify-center items-center p-6 mx-5 rounded-xl cursor-pointer backdrop-blur-md bg-blue-500/10 border border-l-blue-500/20 border-t-blue-500/20 border-r-black border-b-black hover:bg-blue-500/20 transition shadow-xl"
                >
                <p className="text-lg text-gray-400">{q.content}</p>
                <p className="text-right text-sm text-gray-500">— {q.author}</p>

                <button
                    onClick={() => handleRemove(q.id)}
                    className="text-sm text-red-600 hover:underline"
                >
                    Remove
                </button>
            </div>
            ))}
            </motion.div>
        </BackgroundWrapper>
    </>
    );
}