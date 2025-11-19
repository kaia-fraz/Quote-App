export default function BackgroundW ({ children}) {
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-950 text-white p-6 flex flex-col justify-center items-center">
        {children}
    </div>
)
}