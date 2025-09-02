"use client";
import { profile } from "@/lib/data";
import Container from "./Container";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-brand-200 blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-brand-300 blur-3xl opacity-20 animate-pulse" />

      <Container>
        <div className="pt-24 pb-20 grid md:grid-cols-2 items-center gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-brand-100 text-brand-700 shadow-sm dark:bg-gray-800 dark:text-brand-300">
              Power Platform Developer
            </span>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="text-gray-900 dark:text-white">{profile.name}</span>{" "}
              <span className="text-brand-600">—</span>{" "}
              <span className="text-gray-700 dark:text-gray-300">{profile.title}</span>
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {profile.summary}
            </p>

            <div className="flex gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold shadow-md hover:shadow-lg transition"
              >
                🚀 View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-800/40 backdrop-blur-md shadow-sm hover:shadow-md transition"
              >
                ✉️ Contact
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl bg-white dark:bg-gray-900 p-6 md:p-8 shadow-xl border border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-6">
              My Skills
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {profile.skills.slice(0, 6).map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.04 }}
                  className="px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-[15px] font-medium 
          text-gray-700 dark:text-gray-200
          bg-gray-50 dark:bg-gray-800 rounded-lg 
          border border-gray-200 dark:border-gray-700
          shadow-sm hover:shadow-md transition"
                >
                  {s}
                </motion.div>
              ))}
            </div>
          </motion.div>



        </div>
      </Container>
    </div>
  );
}
