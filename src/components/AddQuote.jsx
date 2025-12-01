import {useState} from "react";
import { Plus, X } from "lucide-react";
import { getCurrentUser } from "../accounts/auth";

export default function AddQuote({ onAdd }) {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [error, setError] = useState("");
    const user = getCurrentUser();

    function handleSubmit(e) {
        e.preventDefault();
    const trimmedContent = content.trim();
    const trimmedAuthor = author.trim() || "Unknown";

    if (!trimmedContent) {
        setError("Quote content cannot be empty.");
        return;
    }

    const newQuote = { 
        id: Date.now().toString(),
        content: trimmedContent,
        author: trimmedAuthor,
    }

    onAdd(newQuote);

    setContent("");
    setAuthor("");
    setError("");
    setOpen(false);
};

    return (
        <div className="relative" >
            <button
                onClick={() => setOpen(!open)}
                className="absolute top-4 right-4 p-3 transition z-50 rounded-full shadow-lg hover:bg-blue-500/20"
                aria-label="Toggle add quote"
            >
                {open ? <X className="text-white" /> : <Plus className="text-white" />}
            </button>
            <form onSubmit={handleSubmit} className={`
                absolute top-16 right-4 p-4 w-80 shadow-xl rounded-xl bg-blue-500/10 backdrop-blur-md border border-white/10 shadow-xl flex flex-col gap-3 
                transition-all duration-300 origin-top-right
                ${open ? "opacity-100 visible" : "opacity-0 invisible"
            }`}>
                <h2 className="text-lg font-semibold mb-4 text-white">Add Your Quote</h2>
                <label>
                    <textarea
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        placeholder="Type your quote here..."
                        className="w-full h-24 p-2 rounded-md bg-blue-500/10 text-white outline-none resize-none"
                    ></textarea>
                </label>
                <label>
                    <textarea
                        value={author}
                        onChange ={e => setAuthor(e.target.value)}
                        placeholder="Author"
                        className="w-full mt-2 p-2 rounded-md bg-blue-500/10 text-white outline-none"
                    ></textarea>
                </label>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <div className="flex justify-end">
                    <button
                        className="mt-3 px-4 py-2 bg-blue-500/40 text-white rounded-md hover:bg-blue-600/40 transition cursor-pointer"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}
