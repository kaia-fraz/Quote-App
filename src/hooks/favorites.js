export function LoadFavorites() {
    try {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    } catch {
        return [];
    }
}

export function SaveFavorites(favs) {
    localStorage.setItem("favorites", JSON.stringify(favs))
}

export function AddFavorites(quote) {
   const favs =  LoadFavorites();

   if(!favs.some(q => q.id === quote.id)) {
    favs.unshift(quote);
    SaveFavorites(favs);
  }

}

export function RemoveFavorites(id) {
     const favs = LoadFavorites().filter(q => q.id !== id);
  SaveFavorites(favs);
}
