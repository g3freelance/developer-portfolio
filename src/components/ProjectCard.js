const ProjectCard = ({ title, description, link }) => {
    return (
        <div className="bg-[#544a26] shadow-lg p-5 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-[#f6f3e9]">{title}</h2>
            <p className="text-[#a0a845] mt-2">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#86883a] mt-3 inline-block hover:underline">
                View Project →
            </a>
        </div>
    );
};

export default ProjectCard;
