"use client";

import Section from "./Section";
import { profile } from "@/lib/data";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" eyebrow="Tech Stack">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {profile.skills.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="card p-4 text-center text-sm font-medium shadow hover:shadow-md transition"
          >
            {s}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
