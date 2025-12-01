import {LoadFavorites, RemoveFavorites} from "../hooks/favorites.js";
import BackgroundWrapper from "../../Style/Background.jsx";
import { useState } from "react";

export default function Favorites() {
    const [favorites, setFavorites] = useState(LoadFavorites() || []);

    function handleRemove(id) {
        RemoveFavorites(id);
        setFavorites(LoadFavorites());
    }
    return (
    <> 
        <BackgroundWrapper>
            <h1 className="text-3xl font-bold mb-4">Favorites</h1>
            {favorites.length === 0 && (
                <p className="text-gray-500">You haven't liked any quotes yet.</p>
            )}
            {favorites.map(q => (
            <div
                key={q.id}
                className="p-4 bg-white border rounded-xl shadow-sm space-y-2"
                >
                <p className="text-lg text-gray-800">{q.content}</p>
                <p className="text-right text-sm text-gray-500">— {q.author}</p>

                <button
                    onClick={() => handleRemove(q.id)}
                    className="text-sm text-red-600 hover:underline"
                >
                    Remove
                </button>
            </div>
            ))}
        </BackgroundWrapper>
    </>
    );
}