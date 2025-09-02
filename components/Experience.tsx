"use client";
import Section from "./Section";
import { profile } from "@/lib/data";
import { motion } from "framer-motion";
import { Star } from "lucide-react"; // star icon

export default function Experience() {
  return (
    <Section id="experience" title="Experience" eyebrow="My Journey">
      <div className="relative pl-6 border-l-2 border-brand-200 dark:border-brand-700/30 space-y-10">
        {profile.experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative card p-6"
          >
            <motion.div
              className="absolute right-4 top-4 text-brand-500"
              initial={{ scale: 0, rotate: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.3, 1], 
                rotate: [0, 20, -20, 0],
                opacity: 1 
              }}
              transition={{ 
                duration: 1, 
                ease: "easeOut",
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 4 // pops every few seconds
              }}
            >
              <Star className="w-6 h-6 fill-current text-yellow-400" />
            </motion.div>
            <span className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-brand-500 border-4 border-white dark:border-gray-900 shadow-md" />
            <h3 className="font-semibold text-lg">{exp.role} · {exp.company}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
              {exp.points.map((p, idx) => <li key={idx}>{p}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
