export function LoadFavorites() {
    try {
        const userId = localStorage.getItem("currentUserId");
        if (!userId) return [];
        const key = `likedQuotes_user_${userId}`;
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch {
        return [];
    }
}

export function SaveFavorites(favs) {
    const userId = localStorage.getItem("currentUserId");
    if (!userId) return;
    const key = `likedQuotes_user_${userId}`;
    localStorage.setItem(key, JSON.stringify(favs));
}

export function AddFavorites(quote) {
   const favs = LoadFavorites();

   if(!favs.some(q => q.id === quote.id)) {
    favs.unshift(quote);
    SaveFavorites(favs);
  }
}

export function RemoveFavorites(id) {
     const favs = LoadFavorites().filter(q => q.id !== id);
  SaveFavorites(favs);
}
