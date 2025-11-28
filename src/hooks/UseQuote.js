import { useEffect, useState, useCallback } from "react";

// Custom hook: fetch a random quote and expose state + refetch
export default function useQuote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://quotastic-whispers.vercel.app/api/random");
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const data = await res.json();
      setQuote(data);
    } catch (e) {
      setError(e.message || "Failed to fetch quote");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return { quote, loading, error, fetchQuote };
}
