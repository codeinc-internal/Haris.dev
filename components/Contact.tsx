"use client";
import Section from "./Section";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      from_name: formData.get("from_name"),
      reply_to: formData.get("reply_to"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) setSent(true);
  };

  return (
    <Section id="contact" title="Get In Touch" eyebrow="Contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card p-4 md:p-6 bg-gradient-to-br from-white to-brand-50 dark:from-gray-900 dark:to-gray-800/60 shadow-xl rounded-2xl"
      >
        {!sent ? (
          <form onSubmit={sendEmail} className="grid gap-3">
            <motion.input
              name="from_name"
              whileFocus={{ scale: 1.02 }}
              required
              placeholder="Your name"
              className="border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 shadow-sm focus:ring-2 focus:ring-brand-400 focus:border-brand-400 transition-all text-sm bg-white dark:bg-gray-800"
            />
            <motion.input
              name="reply_to"
              type="email"
              required
              placeholder="Email"
              className="border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 shadow-sm focus:ring-2 focus:ring-brand-400 focus:border-brand-400 transition-all text-sm bg-white dark:bg-gray-800"
            />
            <motion.textarea
              name="message"
              required
              placeholder="Message"
              className="border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 h-24 shadow-sm focus:ring-2 focus:ring-brand-400 focus:border-brand-400 transition-all text-sm bg-white dark:bg-gray-800"
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
  className="relative flex flex-col items-center gap-1 text-center p-6"
>
  {/* Graffiti-like background */}
  <div className="absolute inset-0 -z-10">
    <div className="w-full h-full bg-[url('https://i.ibb.co/gJR5G0N/graffiti-texture.jpg')] bg-cover bg-center opacity-20 blur-sm" />
  </div>

  <p className="text-base font-medium text-green-600">
    ✅ Thanks! Your message was sent.
  </p>
  <p className="text-gray-500 dark:text-gray-400 text-xs">
    I’ll get back to you as soon as possible.
  </p>
</motion.div>

        )}
      </motion.div>
    </Section>
  );
}
