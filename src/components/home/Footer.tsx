"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#3C4242] text-white pt-14 pb-6">
      <div className="max-w-5xl mx-auto px-4">
        {/* TOP GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* NEED HELP */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Need Help</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Returns & Refunds</li>
              <li>FAQ's</li>
              <li>Career</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About Us</li>
              <li>Stylepulse Blog</li>
              <li>Stylepulsetan</li>
              <li>Collaboration</li>
              <li>Media</li>
            </ul>
          </div>

          {/* MORE INFO */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">More Info</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Term and Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Sitemap</li>
            </ul>
          </div>

          {/* LOCATION */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Location</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>support@stylepulse.in</li>
              <li>2972 Westheimer Rd. Santa Ana, Illinois 85486</li>
              <li>(480) 555-0103</li>
            </ul>
          </div>
        </div>

        {/* SOCIAL + APP */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          {/* SOCIAL */}
          <div className="flex gap-3">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-6 md:w-8 h-6 md:h-8 flex items-center text-black/80 justify-center bg-white text-black rounded-md"
                >
                  <Icon size={16} className="hidden md:block" />
                  <Icon size={13} className="md:hidden" />
                </div>
              ),
            )}
          </div>

          {/* DOWNLOAD */}
          <div className="text-center md:text-left">
            <p className="mb-3 font-medium">Download The App</p>

            <div className="flex gap-4 justify-center md:justify-end">
              {/* GOOGLE PLAY */}
              {/* <div className="flex items-center gap-2 bg-transparent border border-gray-500 px-3 py-2 rounded-md text-sm">
                <span className="text-xs">android app on</span>
                <span className="font-semibold">Google Play</span>
              </div> */}

              <Image
                src={"/playstore.png"}
                alt="ps"
                width={100}
                height={0}
                className="md:hidden bg-[#3C4242] h-auto w-[100px]"
              />
              <Image
                src="/playstore.png"
                alt="ps"
                width={150}
                height={0}
                className="hidden md:block bg-[#3C4242] h-auto w-[150px]"
              />
              {/* APP STORE */}
              {/* <div className="flex items-center gap-2 bg-transparent border border-gray-500 px-3 py-2 rounded-md text-sm">
                <span className="text-xs">Available on the</span>
                <span className="font-semibold">App Store</span>
              </div> */}

              <Image
                src={"/ios.png"}
                alt="ps"
                width={100}
                height={10}
                className="md:hidden bg-[#3C4242] h-auto w-[100px]"
              />
              <Image
                src={"/ios.png"}
                alt="ps"
                width={150}
                height={0}
                className="hidden md:block bg-[#3C4242] h-auto w-[150px]"
              />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-500 mb-6"></div>

        {/* POPULAR CATEGORIES */}
        <div className="flex items-center justify-between mb-6">
          <h4 className="font-semibold text-lg">Popular Categories</h4>
          <ChevronDown />
        </div>

        <div className="border-t border-gray-500 mb-6"></div>

        {/* COPYRIGHT */}
        <p className="text-center text-sm text-gray-300">
          Copyright © 2024 StylePulse Fashion Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
