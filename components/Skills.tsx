"use client";
import { motion } from "framer-motion";
import {
  AppWindow,
  LayoutDashboard,
  Database,
  Share2,
  Workflow,
  Code2,
} from "lucide-react";

const skillIcons: Record<string, JSX.Element> = {
  "Power Apps (Canvas)": <AppWindow size={16} />,
  "Power Apps (Model-driven)": <LayoutDashboard size={16} />,
  Dataverse: <Database size={16} />,
  "SharePoint Online": <Share2 size={16} />,
  "Power Automate": <Workflow size={16} />,
  "Power Fx": <Code2 size={16} />,
};

export default function SkillsCard({ profile }: { profile: any }) {
  return (
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
        {profile.skills.slice(0, 6).map((s: string, i: number) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 
              text-sm md:text-[15px] font-medium 
              text-gray-700 dark:text-gray-200
              bg-gray-50 dark:bg-gray-800 rounded-lg 
              border border-gray-200 dark:border-gray-700
              shadow-sm hover:shadow-md transition"
          >
            <span className="text-blue-600 dark:text-blue-400">
              {skillIcons[s]}
            </span>
            {s}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
