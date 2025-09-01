"use client";
import { motion } from "framer-motion";

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

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-700/30 dark:text-blue-300 px-2 py-1 rounded">
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
