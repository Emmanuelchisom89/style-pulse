"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-5">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* LEFT IMAGE */}
        <div className="relative hidden md:block">
          <Image
            src="/signin.png"
            alt="Fashion models"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="flex items-center justify-center px-8 py-8">
          <div className="w-full max-w-sm space-y-5">
            {/* TITLE */}
            <h2 className="text-2xl font-semibold text-gray-800">Sign In</h2>

            {/* SOCIAL BUTTONS */}
            <div className="space-y-2">
              <button
                title="Continue with Google"
                className="w-full border rounded-lg py-2.5 text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition"
              >
                <Image
                  src={"/google.png"}
                  alt="google"
                  width={12.5}
                  height={12.5}
                />
                <span className="text-purple-500 font-semibold">
                  Continue with Google
                </span>
              </button>

              <button
                title="Continue with Facebook"
                className="w-full border rounded-lg py-2.5 text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition"
              >
                <Image src={"/fb.png"} alt="google" width={13} height={13} />
                <span className="text-purple-500 font-semibold">
                  Continue with Facebook
                </span>
              </button>
            </div>

            {/* DIVIDER */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-[10px] text-gray-400 tracking-wider">
                OR
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* FORM */}
            <form className="space-y-4">
              {/* EMAIL */}
              <div>
                <label htmlFor="email" className="text-xs text-gray-500">
                  Email address
                </label>
                <input
                  id="email"
                  title="Enter your email address"
                  type="text"
                  className="w-full mt-1 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <label htmlFor="password">Password</label>
                  <button
                    type="button"
                    title="Toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    className="flex items-center gap-1 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                    Hide
                  </button>
                </div>

                <input
                  id="password"
                  title="Enter your password"
                  type={showPassword ? "text" : "password"}
                  className="w-full mt-1 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <div className="text-right mt-1">
                  <a
                    title="Recover your password"
                    className="text-[11px] text-gray-400 hover:underline cursor-pointer"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                title="Sign in to your account"
                className="w-full py-2.5 text-sm rounded-lg text-white bg-gradient-to-r from-purple-600 to-purple-400 hover:opacity-90 transition"
              >
                Sign In
              </button>
            </form>

            {/* FOOTER */}
            <p className="text-xs text-gray-500">
              Don’t have an account?{" "}
              <a
                href="/register"
                title="Go to sign up page"
                className="underline hover:text-black"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
