import { motion } from "framer-motion";
import BackgroundWrapper from "../../Style/Background.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
 const error = console.log("error");  
  return (
    <BackgroundWrapper>
      <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                 className="min-h-screen flex items-center justify-center px-4">
        <form
          className="w-full max-w-md p-8  rounded-xl bg-blue-500/10 backdrop-blur-md border border-l-blue-500/20 border-t-blue-500/20 border-r-black border-b-black 
           shadow-xl flex flex-col gap-3 "
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>
          {error && <p className="mb-4 text-red-300 text-sm">{error}</p>}
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md bg-blue-500/10 outline-none border border-white/10 focus:border-blue-400 transition"
              required
            />
            <input
              type="password"
              placeholder="Password"
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
      </motion.div>
    </BackgroundWrapper>
  );
}
