import { useState, useEffect } from "react";

export default function UseQuote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchQuote() {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("https://api.quotable.io/random");

      if (!res.ok) {
        throw new Error("Failed to fetch quote");
      }

      const data = await res.json();
      setQuote(data);
    } catch (err) {
      console.error("Error fetching quote:", err);
      setError("Failed to load quote. Try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return {
    quote,
    loading,
    error,
    fetchQuote,
  };
}
