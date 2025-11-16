export default function QuoteCard() {
    return (
    <>
        <div className="flex flex-col justify-center items-center p-4">
            <div className="max-w-lg w-full bg-slate-900/60 rounded-2xl 
            border-l border-t border-stone-200/10
            border-b border-b-black/40 border-r border-r-black/40
            shadow-lg p-8 text-center">
                <h1 className="text-3xl font-bold mb-6 tracking-tight"> Daily Quote </h1>

                <p className="text-xl italic text-gray-200 mb-4 leading-relaxed"></p>
                <p className="text-gray-400 mb-8">-</p>
            </div>
        </div>
    </>
    );
}