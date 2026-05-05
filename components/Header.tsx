"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Globe, Search } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-md" : "bg-gradient-to-b from-black/80 to-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        
        {/* Left Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {["车型", "购车", "服务", "互动", "关于"].map((item) => (
            <a
              key={item}
              href={`#`}
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Center Logo */}
        <div className="flex-shrink-0 absolute left-1/2 -translate-x-1/2">
          <span className="text-2xl font-bold tracking-[0.3em] text-white">BYD</span>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-6 text-white">
          <a href="#" className="hidden md:block text-sm hover:text-gray-300">English</a>
          <button className="hover:text-gray-300"><Search size={18} /></button>
          <button className="hover:text-gray-300"><Globe size={18} /></button>
          <button className="hover:text-gray-300"><Menu size={22} /></button>
        </div>
      </div>
    </header>
  );
}
