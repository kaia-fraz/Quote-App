import React from "react";

export default function OwnQuoteCard({ quote, onRemove }) {
  return (
    <div className="p-4 flex justify-between items-start
      bg-blue-500/10 shadow-xl rounded-xl cursor-pointer
      border border-l-blue-500/20 border-t-blue-500/20
      border-r-black border-b-black
      backdrop-blur-md
      hover:bg-blue-500/20 transition">

      <div>
        <p className="text-lg italic">“{quote.content}”</p>
        <p className="mt-2 text-sm">— {quote.author}</p>
      </div>

      <div className="ml-4">
        <button
          onClick={onRemove}
          className="text-sm px-2 py-1 rounded-md border text-red bg-red-400 hover:bg-red-500"
          aria-label="Remove quote"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
