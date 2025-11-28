import React from "react";

export default function OwnQuoteCard({ quote, onRemove }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-start"
    style={{
            background: "var(--cardOpaque)",
            borderColor: "var(--border)",
            color: "var(--text)",
        }}>
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
