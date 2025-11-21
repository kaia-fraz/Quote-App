export default function BackgroundWrapper ({ children}) {
return (
    <div className="min-h-screen text-white p-6 flex flex-col justify-center items-center"
    style={{
        background: `linear-gradient(to bottom right, var(--bg1), var(--bg2))`,
        color: "var(--text)",
    }}
    >
        {children}
    </div>
)
}