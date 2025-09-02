"use client";
import { motion } from "framer-motion";

// Dummy projects data
const projects = [
  {
    title: "Power Apps CRM",
    desc: "Model-driven app for managing customer interactions.",
    tech: ["Power Apps", "Dataverse", "SharePoint"],
  },
  {
    title: "Employee Onboarding Flow",
    desc: "Automated onboarding process using Power Automate.",
    tech: ["Power Automate", "SharePoint"],
  },
  {
    title: "Data Dashboard",
    desc: "Power BI dashboard integrated with Dataverse.",
    tech: ["Power BI", "Dataverse"],
  },
];

// Floating pixel animation component
function PixelAnimation() {
  const pixels = Array.from({ length: 6 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pixels.map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 bg-blue-400/40 dark:bg-blue-300/30 rounded-sm"
          initial={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 120 - 60,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: [null, -40 - Math.random() * 20],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
          style={{
            top: `${50 + Math.random() * 30}%`,
            left: `${50 + Math.random() * 30}%`,
          }}
        />
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-100 text-center"
      >
        Projects
      </motion.h2>

      {/* Cards grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.04 }}
            className="relative card p-6 rounded-2xl shadow-md hover:shadow-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            {/* Pixel animation */}
            <PixelAnimation />

            {/* Project content */}
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 relative z-10">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 relative z-10">
              {project.desc}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 relative z-10">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 dark:from-blue-700/40 dark:to-blue-800/40 dark:text-blue-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
