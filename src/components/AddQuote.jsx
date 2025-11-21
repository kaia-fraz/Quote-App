import {useState} from "react";
import { Plus, X } from "lucide-react";

export default function AddQuote() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="absolute top-4 right-4 p-3 transition z-50 rounded-full shadow-lg hover:bg-blue-500/20"
                aria-label="Toggle add quote"
            >
                {open ? <X className="text-white" /> : <Plus className="text-white" />}
            </button>
            <div className={`
                absolute top-16 right-4 p-4 w-80 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl 
                transition-all duration-300 origin-top-right
                ${open ? "opacity-100 visible" : "opacity-0 invisible"
            }`}>
                <h2 className="text-lg font-semibold mb-4 text-white">Add Your Quote</h2>
                <textarea
                    placeholder="Type your quote here..."
                    className="w-full h-24 p-2 rounded-md bg-blue-500/10 text-white outline-none resize-none"
                ></textarea>
            <textarea
                placeholder="Author"
                className="w-full mt-2 p-2 rounded-md bg-blue-500/10 text-white outline-none"
            ></textarea>
            <button
                className="mt-3 px-4 py-2 bg-blue-500/40 text-white rounded-md hover:bg-blue-600/40 transition cursor-pointer"
            >
                Add
            </button>
            </div>
        </div>
    )
}
