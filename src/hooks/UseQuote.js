import { useEffect, useState, useCallback } from "react";

export default function useQuote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "https://zenquotes.io/api/random";
  const PROXY = "https://corsproxy.io/?";

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const url = `${PROXY}${encodeURIComponent(API_URL)}`;
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);

      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeout);

      if (!res.ok) {
        const snippet = await res.text().catch(() => "");
        throw new Error(`Request failed (${res.status}) ${snippet.slice(0, 120)}`);
      }

      const ct = res.headers.get("content-type") || "";
      if (!ct.includes("application/json")) {
        const text = await res.text().catch(() => "");
        throw new Error(`Unexpected content-type: ${ct} ${text.slice(0, 120)}`);
      }

      const data = await res.json();

      // ZenQuotes returns an array with one object
      const normalized = {
        content: data[0]?.q ?? "",
        author: data[0]?.a ?? "Unknown",
      };

      setQuote(normalized);
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
