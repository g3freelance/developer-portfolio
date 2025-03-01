"use client"

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const colorPalette = {
  background: "#f6f3e9",
  primary: "#544a26",
  secondary: "#6d6930",
  accent: "#86883a",
  highlight: "#a0a845",
};

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and TailwindCSS.",
    link: "#",
    category: "web",
  },
  {
    title: "E-commerce App",
    description: "A full-stack e-commerce application using Node.js and MongoDB.",
    link: "#",
    category: "fullstack",
  },
  {
    title: "Task Manager",
    description: "A productivity tool with real-time task management.",
    link: "#",
    category: "web",
  },
  {
    title: "Weather App",
    description: "A React weather app that fetches real-time data from an API.",
    link: "#",
    category: "web",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "fullstack", label: "Full Stack" },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredProjects = projects.filter(
    (project) => selectedCategory === "all" || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: colorPalette.background, color: colorPalette.primary }}>
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-16 px-6"
      >
        <h1 className="text-5xl font-extrabold" style={{ color: colorPalette.primary }}>
        Projects
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: colorPalette.secondary }}>
          Explore my portfolio of projects spanning web development, full-stack applications, and more.
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto mt-12 px-6">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? "text-white"
                  : "hover:bg-opacity-80"
              }`}
              style={{ backgroundColor: selectedCategory === category.id ? colorPalette.accent : colorPalette.secondary, color: "white" }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg" style={{ color: colorPalette.secondary }}>No projects found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
