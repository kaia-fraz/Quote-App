import { v4 as uuidv4 } from "uuid";

// --- Load users from localStorage ---
export default function LoadUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// --- Save users to localStorage ---
export function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// --- Sign Up ---
export function signUp(email, password) {
  const users = loadUsers();

  // Check if email exists already
  if (users.some(u => u.email === email)) {
    return { error: "Email already in use" };
  }

  const newUser = {
    id: uuidv4(),
    email,
    password, // optional: hash this later
    data: {
      quotes: [], // you can attach anything here (favorites, settings, saved items)
    }
  };

  users.push(newUser);
  saveUsers(users);

  // automatically log in after signup
  localStorage.setItem("currentUser", newUser.id);

  return { user: newUser };
}

// --- Sign In ---
export function signIn(email, password) {
  const users = loadUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) return { error: "Invalid email or password" };

  localStorage.setItem("currentUser", user.id);
  return { user };
}

// --- Get current logged-in user ---
export function getCurrentUser() {
  const id = localStorage.getItem("currentUser");
  if (!id) return null;

  const users = loadUsers();
  return users.find(u => u.id === id) || null;
}

// --- Log out ---
export function signOut() {
  localStorage.removeItem("currentUser");
}
