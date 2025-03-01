import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#F5F2E9] text-[#5A512C] p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-extrabold tracking-wide flex items-center space-x-2">
                    <span>G3.</span><span className="text-[#8A8C49]">Freelance</span>
                </Link>
                
                <div className="hidden md:flex space-x-6 font-medium">
                    <Link to="/" className="hover:text-[#8A8C49] transition">Home</Link>
                    <Link to="/projects" className="hover:text-[#8A8C49] transition">Projects</Link>
                    <Link to="/about" className="hover:text-[#8A8C49] transition">About</Link>
                    <Link to="/contact" className="hover:text-[#8A8C49] transition">Contact</Link>
                </div>
                
                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <Menu size={28} className="text-[#5A512C]" />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }} 
                    className="md:hidden bg-[#F5F2E9] text-[#5A512C] p-4 space-y-4 border-t border-[#8A8C49]"
                >
                    <Link to="/" className="block hover:text-[#8A8C49]" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/projects" className="block hover:text-[#8A8C49]" onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link to="/about" className="block hover:text-[#8A8C49]" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" className="block hover:text-[#8A8C49]" onClick={() => setIsOpen(false)}>Contact</Link>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
