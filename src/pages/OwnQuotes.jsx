import AddQuote from "../components/AddQuote.jsx";

export default function OwnQuotes() {
    return (
    <> 
        <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-950 text-white p-6 flex flex-col">
            <div className="flex justify-end">
                <AddQuote />
            </div>
            <div className="flex flex-col justify-center items-center p-4">
                <h1 className="text-3xl font-bold mb-4">Your Quotes</h1>
                <p>Manage your quotes here.</p>
            </div>
        </div>
    </>
    );
}
