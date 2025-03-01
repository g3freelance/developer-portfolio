import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <div className="bg-[#f6f3e9] text-[#544a26] min-h-screen">
            <Navbar />

            {/* Contact Section */}
            <div className="max-w-3xl mx-auto text-center mt-16 px-6">
                <h1 className="text-5xl font-extrabold text-[#6d6930]">Get in Touch</h1>
                <p className="text-[#544a26] mt-4 text-lg">
                    Have a project in mind? We'd love to hear from you!  
                    Reach out via email, phone, or fill out the form below.
                </p>
            </div>

            {/* Contact Form */}
            <div className="max-w-lg mx-auto bg-[#a0a845] p-8 rounded-xl shadow-lg mt-10">
                <h2 className="text-2xl font-semibold text-[#f6f3e9] text-center">Send a Message</h2>
                <form className="mt-6 space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md bg-[#86883a] border border-[#6d6930] text-[#f6f3e9] focus:outline-none focus:border-[#544a26]" required />
                    <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md bg-[#86883a] border border-[#6d6930] text-[#f6f3e9] focus:outline-none focus:border-[#544a26]" required />
                    <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-md bg-[#86883a] border border-[#6d6930] text-[#f6f3e9] focus:outline-none focus:border-[#544a26]" required></textarea>
                    <button type="submit" className="w-full bg-[#6d6930] hover:bg-[#544a26] text-[#f6f3e9] font-bold py-3 rounded-md transition duration-300">
                        Send Message
                    </button>
                </form>
            </div>

            {/* Other Contact Options */}
            <div className="text-center mt-12">
                <h2 className="text-2xl font-semibold text-[#6d6930]">Other Ways to Connect</h2>
                <p className="text-[#544a26] mt-2 text-lg">Email: <a href="mailto:g3.freelance@gmail.com" className="text-[#86883a] hover:text-[#6d6930]">g3.freelance@gmail.com</a></p>
                <p className="text-[#544a26] mt-1 text-lg">Phone: <a href="tel:+639693243513" className="text-[#86883a] hover:text-[#6d6930]">+63 969 3243-513</a></p>
                
                <div className="flex justify-center gap-6 mt-4">
                    <a href="https://facebook.com/g3freelance" target="_blank" rel="noopener noreferrer" className="text-[#6d6930] hover:text-[#544a26] text-2xl">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/g3freelance" target="_blank" rel="noopener noreferrer" className="text-[#6d6930] hover:text-[#544a26] text-2xl">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://linkedin.com/company/g3freelance" target="_blank" rel="noopener noreferrer" className="text-[#6d6930] hover:text-[#544a26] text-2xl">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/g3freelance" target="_blank" rel="noopener noreferrer" className="text-[#6d6930] hover:text-[#544a26] text-2xl">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
