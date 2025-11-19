import {useState} from "react";
import { Plus, X } from "lucide-react";

export default function AddQuote() {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col items-center">
            <button
                onClick={() => setOpen(!open)}
                className="p-3 rounded-full bg-blue-500/10 backdrop-blur-md hover:bg-white/20 transition"
            >
                {open ? <X className="text-white" /> : <Plus className="text-white" />}
            </button>
            <div className={`
                mt-3 p-4 w-80 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl 
                transition-all duration-300
                ${open ? "opacity-100 visible" : "opacity-0 invisible"}
            `}>
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
