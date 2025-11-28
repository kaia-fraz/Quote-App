import useQuote from "../hooks/useQuote";

export default function QuoteFeed() {
    const { quote, loading, error, fetchQuote } = useQuote();
    return (
        <>
            <div>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
            </div>
            <div className="flex flex-col justify-center items-center p-6 mx-5 shadow-xl rounded-xl cursor-pointer backdrop-blur-md"
            style={{
                background: "var(--cardOpaque)",
                borderColor: "var(--border)",
                color: "var(--text)",
            }}>
                {quote && !loading && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">{quote.content}</h2>
                        <p className="text-gray-400">- {quote.author}</p>
                    </div>
                )}
                <button
                    onClick={fetchQuote}
                    className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
                >
                    New Quote
                </button>
            </div>
            </>
    );
}