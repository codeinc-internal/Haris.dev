"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Briefcase,
  FolderGit2,
  Wrench,
  Mail,
  Menu,
  X,
  Moon,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Skills", href: "#skills", icon: Wrench },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full px-4">
      <nav
        className="backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg rounded-full border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto px-6 py-3 flex items-center justify-between"
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block text-lg font-bold text-blue-600 dark:text-blue-400 select-none"
        >
          Haris<span className="text-gray-500 dark:text-gray-300">.dev</span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-4">
          {navItems.map((item, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <Link
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-700 dark:text-gray-200 font-medium transition-all hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600"
              >
                <item.icon size={18} />
                {item.name}
              </Link>
            </motion.li>
          ))}
          {/* Dark Mode Toggle Placeholder */}
          <li>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <Moon size={18} className="text-gray-700 dark:text-gray-200" />
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg rounded-2xl mt-2 border border-gray-200 dark:border-gray-700"
          >
            <ul className="flex flex-col items-center space-y-4 py-6">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-2 rounded-full text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon size={20} />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
