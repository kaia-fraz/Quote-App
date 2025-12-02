import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BackgroundWrapper from "../../Style/Background.jsx";


export default function SignUp() {
  const [userAccounts, setUserAccounts] = useState([]);
  const [numUsers, setNumUsers] = useState(0);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedNumUsers = parseInt(localStorage.getItem("numUsers") || "0")
    setNumUsers(storedNumUsers)

    const storedAccounts = JSON.parse(localStorage.getItem("userAccounts") || "[]")
    setUserAccounts(storedAccounts)
  },[]);

  function handleNewUser(e) {
    e.preventDefault();
    setError(null);
    const userEmail = document.getElementById("email")?.value || "";
    const userPassword = document.getElementById("password")?.value || "";
    const confirmPassword = document.getElementById("confirm")?.value || "";

    const emailRegex =  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if(!emailRegex.test(userEmail)) {
      setError("Invalid email format.");
      return;
    }
    if (userPassword.length < 6){
      setError("Password must be at least 6 characters.");
      return;
    }
    if (userPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    
    if (userAccounts.some(u => u.email === userEmail)) {
      setError("Email already registered.");
      return;
    }

    const newNumUsers = numUsers + 1;

    const newUserAccount = {
      id: newNumUsers,
      email: userEmail,
      password: userPassword,
    }

    const updatedAccounts = [...userAccounts, newUserAccount]

    setNumUsers(newNumUsers);
    setUserAccounts(updatedAccounts);

    localStorage.setItem("numUsers", newNumUsers.toString());
    localStorage.setItem("userAccounts", JSON.stringify(updatedAccounts))
     
    navigate("/sign-in");
  }


  return (
    <BackgroundWrapper>

      <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }} 
                className="min-h-screen flex items-center justify-center px-4">
        <form
          onSubmit={handleNewUser}
          className="w-full max-w-md p-8 rounded-xl bg-blue-500/10 backdrop-blur-md border border-l-blue-500/20 border-t-blue-500/20 border-r-black border-b-black shadow-xl flex flex-col gap-3"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>
          {error && <p className="mb-4 text-red-300 text-sm">{error}</p>}
          <div className="space-y-4">
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md bg-blue-500/10 outline-none border border-white/10 focus:border-blue-400 transition"
              required
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md bg-blue-500/10 outline-none border border-white/10 focus:border-blue-400 transition"
              required
            />
            <input
              id="confirm"
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-md bg-blue-500/10 outline-none border border-white/10 focus:border-blue-400 transition"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-blue-500/50 hover:bg-blue-500/70 text-white font-semibold py-3 rounded-md transition"
          >
            Sign Up
          </button>
          <p className="mt-6 text-center text-sm text-white/70">
            Already have an account? <Link to="/sign-in" className="text-blue-300 hover:text-blue-200 underline">Sign In</Link>
          </p>
        </form>
      </motion.div>
    </BackgroundWrapper>
  );
}
