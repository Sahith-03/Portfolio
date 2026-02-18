import React from 'react';
import { BentoItem } from '../Layout/BentoItem';
import { projectsData } from '../../data/projects';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsCard: React.FC = () => {
    return (
        <>
            <BentoItem colSpan={4} rowSpan={1} className="md:col-span-4">
                <h2 className="text-3xl font-bold text-white">Projects</h2>
            </BentoItem>
            {projectsData.map((project) => (
                <BentoItem key={project.id} colSpan={1} rowSpan={1} className="flex flex-col justify-between group cursor-pointer" whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <div onClick={() => window.open(project.url, '_blank')} className="h-full flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                            {project.image && <img src={project.image} alt={project.title} className="w-10 h-10" />}
                            <FaExternalLinkAlt className="text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1 text-white">{project.title}</h3>
                            <p className="text-xs text-gray-400 font-semibold mb-2">{project.tech}</p>
                            <p className="text-sm text-gray-300 line-clamp-3">{project.description}</p>
                        </div>
                    </div>
                </BentoItem>
            ))}
        </>
    );
};

export default ProjectsCard;
