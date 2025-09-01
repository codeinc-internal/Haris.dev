"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 space-y-4 md:space-y-0">
        
        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-sm text-center md:text-left"
        >
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">Haris.dev</span>. All rights reserved.
        </motion.p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="transition-transform transform hover:scale-110"
          >
            <Github className="w-6 h-6 text-gray-400 hover:text-blue-500 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="transition-transform transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="mailto:you@example.com"
            aria-label="Send Email"
            className="transition-transform transform hover:scale-110"
          >
            <Mail className="w-6 h-6 text-gray-400 hover:text-green-400 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
