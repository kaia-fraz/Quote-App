export default function QuoteFeed() {
    const fakeQuote = {
    content: "life is what happens when you're busy making other plans.",
    author: "John Lennon"
    };
    return (
        <div className="flex flex-col justify-center items-center p-6 mx-5 bg-blue-500/10 shadow-xl rounded-xl cursor-pointer
      border border-l-blue-500/20 border-t-blue-500/20
      border-r-black border-b-black
      backdrop-blur-md
       hover:bg-blue-500/20 transition
      ">
            <h2 className="text-2xl font-bold mb-4 text-white">{fakeQuote.content}</h2>
            <p className="text-gray-400">- {fakeQuote.author}</p>
        </div>
    );
}