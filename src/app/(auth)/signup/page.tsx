"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  // ✅ NEW: form state
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // ✅ NEW: loading + error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ NEW: submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        setLoading(false);
        return;
      }

      // success
      alert("Account created successfully!");
      window.location.href = "/login";
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-5">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* LEFT IMAGE */}
        <div className="relative hidden md:block">
          <Image
            src="/sb2.png"
            alt="Fashion models"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="flex items-center justify-center px-8 py-8">
          <div className="w-full max-w-sm space-y-5">
            {/* TITLE */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Sign Up</h2>
              <p className="text-xs text-gray-400 mt-1">
                Sign up for free to access all our products
              </p>
            </div>

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
                <Image src={"/fb.png"} alt="facebook" width={13} height={13} />
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* EMAIL */}
              <div>
                <label htmlFor="email" className="text-xs text-gray-500">
                  Email Address
                </label>
                <input
                  id="email"
                  title="Enter your email address"
                  type="email"
                  placeholder="designer@gmail.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full mt-1 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                {/* ERROR MESSAGE */}
                {error && (
                  <p className="text-[11px] text-red-500 mt-1">{error}</p>
                )}
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
                  title="Create your password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  className="w-full mt-1 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <p className="text-[11px] text-gray-400 mt-1">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </p>
              </div>

              {/* CHECKBOXES */}
              <div className="space-y-2 text-xs text-gray-500">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    title="Agree to terms and privacy policy"
                    className="mt-1"
                  />
                  <span>
                    I agree to the{" "}
                    <a href="#" title="Terms of use" className="underline">
                      Terms of use
                    </a>{" "}
                    and{" "}
                    <a href="#" title="Privacy policy" className="underline">
                      Privacy Policy
                    </a>
                  </span>
                </label>

                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    title="Subscribe to newsletter"
                    className="mt-1"
                  />
                  <span>Subscribe to our monthly newsletter</span>
                </label>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                title="Create your account"
                disabled={loading}
                className="w-full py-2.5 text-sm rounded-lg text-white bg-gradient-to-r from-purple-600 to-purple-400 hover:opacity-90 transition disabled:opacity-60"
              >
                {loading ? "Creating..." : "Sign Up"}
              </button>
            </form>

            {/* FOOTER */}
            <p className="text-xs text-gray-500">
              Already have an account?{" "}
              <a
                href="/login"
                title="Go to login page"
                className="underline hover:text-black"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
