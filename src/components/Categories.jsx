import { useEffect, useState } from "react";

// Placeholder fetcher – replace with your API call later
async function fetchCategoriesMock() {
	// Simulate categories coming from an API
	return [
		"Inspiration",
		"Life",
		"Love",
		"Friendship",
		"Humor",
		"Wisdom",
		"Motivation",
	];
}

export default function QuoteCategories({ onChange }) {
	const [categories, setCategories] = useState([]);
	const [selected, setSelected] = useState(new Set());
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		let active = true;
		setLoading(true);
		setError(null);
		fetchCategoriesMock()
			.then((data) => {
				if (!active) return;
				setCategories(data);
			})
			.catch((e) => {
				if (!active) return;
				setError(e.message || "Failed to load categories");
			})
			.finally(() => active && setLoading(false));
		return () => {
			active = false;
		};
	}, []);

	const toggle = (name) => {
		const next = new Set(selected);
		if (next.has(name)) next.delete(name);
		else next.add(name);
		setSelected(next);
		onChange?.(Array.from(next));
	};

	return (
		<section className="mt-6">
			<div className="p-6 bg-blue-500/10 shadow-xl rounded-xl cursor-pointer
                border border-l-blue-500/20 border-t-blue-500/20
                border-r-black border-b-black
                backdrop-blur-md">
				<h3 className="text-xl font-semibold mb-3">Quote Categories</h3>
				<p className="text-sm text-white/70 mb-4">Choose categories you like. We’ll use these to filter quotes.</p>

				{loading && <p className="text-white/70">Loading categories…</p>}
				{error && <p className="text-red-300 text-sm">{error}</p>}

				{!loading && !error && (
					<div className="flex flex-wrap gap-2">
						{categories.map((c) => {
							const isActive = selected.has(c);
							return (
								<button
									key={c}
									type="button"
									onClick={() => toggle(c)}
									className={`px-3 py-1 rounded-full text-sm border transition 
										${isActive ? "bg-blue-500/40 border-blue-300 text-white" : "bg-blue-500/10 border-white/20 text-white/90 hover:bg-blue-500/20"}`}
								>
									{c}
								</button>
							);
						})}
					</div>
				)}
			</div>
		</section>
	);
}