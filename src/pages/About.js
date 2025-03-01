import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div className="bg-[#f6f3e9] text-[#544a26] min-h-screen">
            <Navbar />

            {/* About Section */}
            <div className="max-w-5xl mx-auto text-center mt-16 px-6">
                <h1 className="text-5xl font-extrabold text-[#6d6930]">About G3.Freelance</h1>
                <p className="text-[#544a26] mt-4 text-lg">
                    At <span className="font-bold text-[#86883a]">G3.Freelance</span>, we specialize in delivering high-quality digital solutions 
                    for businesses and individuals. Our mission is to create outstanding designs, seamless user experiences, 
                    and scalable software tailored to your needs.
                </p>
            </div>

            {/* Services Section */}
            <div className="mt-16 px-6 text-center">
                <h2 className="text-4xl font-bold text-[#6d6930]">What We Do</h2>
                <p className="text-[#544a26] mt-2 text-lg">We offer a range of services to help bring your vision to life.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
                    {[
                        { title: "Web Development", description: "Custom websites & web applications." },
                        { title: "Logo Design", description: "Unique and professional branding solutions." },
                        { title: "Infographics", description: "Visual storytelling through graphics." },
                        { title: "Prototype Design", description: "Interactive UI/UX prototypes." },
                        { title: "Software Development", description: "Scalable software solutions for businesses." }
                    ].map((service, index) => (
                        <div key={index} className="bg-[#a0a845] p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-transform">
                            <h3 className="text-xl font-semibold text-[#f6f3e9]">{service.title}</h3>
                            <p className="text-[#544a26] mt-2 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Section (Optional) */}
            <div className="mt-16 px-6 text-center">
                <h2 className="text-4xl font-bold text-[#6d6930]">Meet Our Team</h2>
                <p className="text-[#544a26] mt-2 text-lg">A team of passionate professionals dedicated to delivering top-notch solutions.</p>

                <div className="flex flex-wrap justify-center gap-8 mt-8">
                    {[
                        { name: "John Doe", role: "Full Stack Developer" },
                        { name: "Jane Smith", role: "UI/UX Designer" },
                        { name: "Michael Lee", role: "Brand Strategist" }
                    ].map((member, index) => (
                        <div key={index} className="bg-[#a0a845] p-6 rounded-xl shadow-lg text-center w-60">
                            <h3 className="text-xl font-semibold text-[#f6f3e9]">{member.name}</h3>
                            <p className="text-[#544a26] mt-2 text-sm">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
