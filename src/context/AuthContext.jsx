import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("auth")
  );

  useEffect(() => {
    if (isAuthenticated) localStorage.setItem("auth", "1");
    else localStorage.removeItem("auth");
  }, [isAuthenticated]);

  const signIn = () => setIsAuthenticated(true);
  const signOut = () => {
    // Clear auth flag
    setIsAuthenticated(false);
    // Clear any current user id if present
    localStorage.removeItem("currentUser");
    // Reset theme to default for next (unauthenticated) session
    localStorage.setItem("app-theme", "theme-default");
    // Apply immediately
    document.documentElement.className = "theme-default";
    // Notify any listeners (App storage listener, etc.)
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
