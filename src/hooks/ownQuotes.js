// Helper functions for managing user's own quotes

export function LoadOwnQuotes() {
    try {
        const userId = localStorage.getItem("currentUserId");
        if (!userId) return [];
        const key = `ownQuotes_user_${userId}`;
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch {
        return [];
    }
}

export function SaveOwnQuotes(quotes) {
    const userId = localStorage.getItem("currentUserId");
    if (!userId) return;
    const key = `ownQuotes_user_${userId}`;
    localStorage.setItem(key, JSON.stringify(quotes));
}

export function AddOwnQuote(quote) {
    const quotes = LoadOwnQuotes();
    quotes.push(quote);
    SaveOwnQuotes(quotes);
}

export function RemoveOwnQuote(id) {
    const quotes = LoadOwnQuotes().filter(q => q.id !== id);
    SaveOwnQuotes(quotes);
}
