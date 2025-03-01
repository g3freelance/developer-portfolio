"use client"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Code, PenTool, Image, Layers, Cpu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    name: "Web Development",
    icon: <Code size={40} />, 
    description: "Custom websites and web apps tailored to your needs.",
  },
  {
    id: 2,
    name: "Logo Design",
    icon: <PenTool size={40} />, 
    description: "Unique and creative logos that define your brand identity.",
  },
  {
    id: 3,
    name: "Infographics",
    icon: <Image size={40} />, 
    description: "Visually appealing data representations and illustrations.",
  },
  {
    id: 4,
    name: "Prototype Design",
    icon: <Layers size={40} />, 
    description: "Interactive UI/UX prototypes for your ideas.",
  },
  {
    id: 5,
    name: "Software Development",
    icon: <Cpu size={40} />, 
    description: "High-quality software solutions for businesses and startups.",
  },
];

export default function Home() {
  return (
    <div className="bg-[#F8F6ED] text-[#5A4F28] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-extrabold tracking-wide lg:text-6xl">
              Welcome to <span className="text-[#838A3E]">G3.Freelance</span>
            </h1>
            <p className="text-[#736B45] text-lg max-w-xl">
              We specialize in crafting high-quality digital solutions. Explore our services and let's build something
              amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/projects"
                className="bg-[#838A3E] hover:bg-[#6C7535] text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all flex items-center justify-center group"
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="bg-[#5A4F28] hover:bg-[#47401F] text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#E5E2D7] py-24">
        <div className="container mx-auto px-6">
          <motion.div className="text-center max-w-2xl mx-auto mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-[#838A3E] mb-4">Services We Offer</h2>
            <p className="text-[#736B45] text-lg">High-quality solutions tailored for your needs.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={service.id} className="bg-[#F8F6ED] p-8 rounded-xl shadow-lg hover:shadow-[#838A3E]/20 transition-all group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="text-[#838A3E] transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold">{service.name}</h3>
                  <p className="text-[#736B45]">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
