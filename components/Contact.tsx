"use client";

import Section from "./Section";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="contact" title="Get In Touch" eyebrow="Contact"  >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card p-4 md:p-6 bg-gradient-to-br from-white to-brand-50 shadow-xl rounded-2xl"
      >
        {!sent ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="grid gap-3"
          >
            <motion.input
              whileFocus={{ scale: 1.02 }}
              required
              className="border border-gray-200 rounded-xl px-3 py-2 shadow-sm focus:ring-2 focus:ring-brand-400 focus:border-brand-400 transition-all text-sm"
              placeholder="Your name"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              required
              type="email"
              className="border border-gray-200 rounded-xl px-3 py-2 shadow-sm focus:ring-2 focus:ring-brand-400 focus:border-brand-400 transition-all text-sm"
              placeholder="Email"
            />
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              required
              className="border border-gray-200 rounded-xl px-3 py-2 h-24 shadow-sm focus:ring-2 focus:ring-brand-400 focus:border-brand-400 transition-all text-sm"
              placeholder="Message"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold rounded-lg px-5 py-2.5 shadow-md hover:bg-brand-700 focus:ring-2 focus:ring-brand-400 transition-all text-sm"
            >
              <Send className="w-4 h-4" /> Send Message
            </motion.button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-1 text-center"
          >
            <p className="text-base font-medium text-green-600">
              ✅ Thanks! Your  message was sent.
            </p>
            <p className="text-gray-500 text-xs">
              I’ll get back to you as soon as possible.
            </p>
          </motion.div>
        )}
      </motion.div>
    </Section>
  );
}
