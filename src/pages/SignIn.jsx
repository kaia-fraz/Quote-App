import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import BackgroundWrapper from "../../Style/Background.jsx";
import signIn from "../accounts/auth.js";
import { useAuth } from "../context/AuthContext.jsx";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { signIn: authenticate } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    // Fake auth placeholder; replace with real validation
    if (!form.email || !form.password) {
      setError("Email and password are required");
      return;
    }
    const result = signIn(form.email, form.password);

    if (result.error) {
      setError(result.error);
      return;
    }
    authenticate();
    navigate("/");
  };

  return (
    <BackgroundWrapper>
      <div className="min-h-screen flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8  rounded-xl bg-blue-500/10 backdrop-blur-md border border-white/10 shadow-xl flex flex-col gap-3 "
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>
          {error && <p className="mb-4 text-red-300 text-sm">{error}</p>}
          <div className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-blue-500/10 outline-none border border-white/10 focus:border-blue-400 transition"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-blue-500/10 outline-none border border-white/10 focus:border-blue-400 transition"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-blue-500/50 hover:bg-blue-500/70 text-white font-semibold py-3 rounded-md transition"
          >
            Sign In
          </button>
          <p className="mt-6 text-center text-sm text-white/70">
            Don't have an account? <Link to="/sign-up" className="text-blue-300 hover:text-blue-200 underline">Sign Up</Link>
          </p>
        </form>
      </div>
    </BackgroundWrapper>
  );
}
