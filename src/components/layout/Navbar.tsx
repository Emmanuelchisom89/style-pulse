"use client";

import { useState } from "react";
import { Search, Heart, User, ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4 px-4 py-3 md:py-4">
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold tracking-tight">
            <span className="text-indigo-600">Style</span>Pulse
          </div>
          <span className="hidden md:inline text-sm text-gray-500">
            Modern picks
          </span>
        </div>

        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((state) => !state)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          className={`absolute inset-x-0 top-full mt-1 rounded-b-xl border border-gray-200 bg-white shadow-lg p-4 transition-all duration-300 md:static md:top-auto md:mt-0 md:border-0 md:bg-transparent md:shadow-none md:p-0 md:flex md:items-center md:gap-6 ${
            mobileOpen ? "block" : "hidden md:block"
          }`}
        >
          <a className="block px-2 py-2 text-sm font-semibold text-gray-900 hover:text-indigo-600 md:inline md:p-0">
            Shop
          </a>
          <a className="block px-2 py-2 text-sm text-gray-700 hover:text-indigo-600 md:inline md:p-0">
            Men
          </a>
          <a className="block px-2 py-2 text-sm text-gray-700 hover:text-indigo-600 md:inline md:p-0">
            Women
          </a>
          <a className="block px-2 py-2 text-sm text-gray-700 hover:text-indigo-600 md:inline md:p-0">
            Combos
          </a>
          <a className="block px-2 py-2 text-sm text-gray-700 hover:text-indigo-600 md:inline md:p-0">
            Joggers
          </a>

          <div className="mt-3 flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 md:mt-0  ">
            <Search size={16} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm placeholder:text-gray-400 md:w-46"
            />
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-6 text-gray-700">
          <Heart size={18} className="hover:text-indigo-600 transition" />
          <User size={18} className="hover:text-indigo-600 transition" />
          <ShoppingCart
            size={18}
            className="hover:text-indigo-600 transition"
          />
        </div>
      </div>
    </header>
  );
}
