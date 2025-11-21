export default function QuoteFeed() {
    const fakeQuote = {
    content: "life is what happens when you're busy making other plans.",
    author: "John Lennon"
    };
    return (
        <div className="flex flex-col justify-center items-center p-6 mx-5 shadow-xl rounded-xl cursor-pointer backdrop-blur-md"
        style={{
            background: "var(--cardOpaque)",
            borderColor: "var(--border)",
            color: "var(--text)",
        }}>
            <h2 className="text-2xl font-bold mb-4">{fakeQuote.content}</h2>
            <p className="text-gray-400">- {fakeQuote.author}</p>
        </div>
    );
}